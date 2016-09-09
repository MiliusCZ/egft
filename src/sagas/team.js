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

  const partialResult = yield call(() => firebase.database().ref('/team').once('value')
    .then(snapshot => snapshot.val()));

  const storageRef = firebase.storage().ref();

  const result = yield call((partResult) => {
    const promises = partResult.map(value => storageRef.child(value.photo).getDownloadURL());

    return Promise.all(promises).then(urls =>
      partialResult.map((value, index) => {
        const newValue = value;
        newValue.photoUrl = urls[index];
        return newValue;
      }));
  }, partialResult);

  yield put({ type: TEAM_REQUEST_SUCCESS, result });
}

export function* getTeam() {
  yield* takeEvery(TEAM, performGetTeam);
}
