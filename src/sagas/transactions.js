import {
    TRANSACTIONS,
    TRANSACTIONS_REQUEST,
    TRANSACTIONS_REQUEST_SUCCESS
} from 'constants/action-types';

import { takeEvery } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import firebase from 'firebase';

export function* performGetTransactions() {
    yield put({ type: TRANSACTIONS_REQUEST });
/*
    const user = yield call(() => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            var token = result.credential.accessToken;
            var user = result.user;
        });
    });*/

    const result = yield call(() => {
        return firebase.database().ref('/transactions').once('value').then(snapshot => {
            return snapshot.val();
        });
    });

    //firebase.auth().signOut().then(() => { });

    yield put({ type: TRANSACTIONS_REQUEST_SUCCESS, result });
}

export function* getTransactions() {
    yield* takeEvery(TRANSACTIONS, performGetTransactions);
}