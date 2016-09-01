import { APP_LOAD, TEAM, TRANSACTIONS } from 'constants/action-types';

export function loadApp() {
  return {
    type: APP_LOAD,
  };
}

export function getTeam() {
  return {
    type: TEAM
  };
}

export function getTransactions() {
  return {
    type: TRANSACTIONS
  };
}
