import { APP_LOAD, TEAM } from 'constants/action-types';

import { takeEvery } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import firebase from 'firebase';

export function* performAppInit() {

}

export function* appInit() {
    yield* takeEvery(APP_LOAD, performAppInit);
}