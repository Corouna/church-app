import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
// Pages
import Landing from '../pages/Landing';
import KDCA from '../pages/KDCA';
import KDM from '../pages/Landing';
import Kaamatan from '../pages/KDM';
import UndukNgadau from '../pages/UndukNgadau';
import Sugandoi from '../pages/Sugandoi';
import MainTemplate from '../pages/MainTemplate';

const Routes = props => {
  const { locale } = props;

  return (
    <Switch>
      <Route exact path="/" render={(props) => <Landing {...props} locale={locale} />} />
      <Route path="/kdca" render={(props) => <KDCA {...props} locale={locale} />} />
      <Route path="/kdm" component={KDM} />
      <Route path="/kaamatan" component={Kaamatan} />
      <Route path="/undukngadau" component={UndukNgadau} />
      <Route path="/sugandoi" component={Sugandoi} />
      <Route path='/main/:page' render={(props) => <MainTemplate {...props} locale={locale} />} />
    </Switch>
  );
}

export default withRouter(Routes)

