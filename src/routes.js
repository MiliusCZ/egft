import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'containers/app';
import { Content } from 'components';
import Team from 'containers/team';
import { Pricelist } from 'containers/pricelist';
import { Questions } from 'containers/questions';
import Transactions from 'containers/transactions';

export const routes = (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Content} />
      <Route path="/tym" component={Team} />
      <Route path="/cenik" component={Pricelist} />
      <Route path="/otazky" component={Questions} />
      <Route path="/transakce" component={Transactions} />
    </Route>
  </Route>
);

export default routes;


