import { fork } from 'redux-saga/effects';
import { appInit } from './app';
import { getTeam } from './team';
import { getTransactions } from './transactions';

export default function* sagas() {
  yield [
    fork(appInit),
    fork(getTeam),
    fork(getTransactions)
  ];
}
