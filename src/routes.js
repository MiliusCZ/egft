import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'containers/app';
import { Content } from 'components/content';
import { Team } from 'components/team';
import { Pricelist } from 'components/pricelist';
import { Questions } from 'components/questions';

export const routes = (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Content} />
      <Route path="/tym" component={Team} />
      <Route path="/cenik" component={Pricelist} />
      <Route path="/otazky" component={Questions} />
    </Route>
  </Route>
);

export default routes;


