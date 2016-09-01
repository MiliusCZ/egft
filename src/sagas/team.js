import {
    TEAM,
    TEAM_REQUEST,
    TEAM_REQUEST_SUCCESS
} from 'constants/action-types';

import { takeEvery } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import firebase from 'firebase';

export function* performGetTeam() {
    yield put({ type: TEAM_REQUEST });

    const partialResult = yield call(() => {
        return firebase.database().ref('/team').once('value').then(snapshot => {
            return snapshot.val();
        });
    })

    const storageRef = firebase.storage().ref();

    const result = yield call((partialResult) => {
        const promises = partialResult.map((value, index) => {
            return storageRef.child(value.photo).getDownloadURL();
        })

        return Promise.all(promises).then(values => {
            return partialResult.map((value, index) => {
                value.photoUrl = values[index];
                return value;
            })
        });
    }, partialResult);

    yield put({ type: TEAM_REQUEST_SUCCESS, result });
}

export function* getTeam() {
    yield* takeEvery(TEAM, performGetTeam);
}