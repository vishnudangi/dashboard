import React from "react";
import {
  Switch,
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import LandingPage from './components/LandingPage';
import CustomerDetailsPage from './components/CustomerDetailsPage';
import PageNotFound from './components/PageNotFound';

export default function Routes() {
  return (
    <Router>
        <Switch>
          <Route exact  path="/">
            <LandingPage />
          </Route>
          <Route path="/employee/:employeeId">
            <CustomerDetailsPage />
          </Route>
          <Route path="*" component={PageNotFound} />
        </Switch>
    </Router>
  );
}

// import React from 'react';
// import { Switch, Route, BrowserRouter} from 'react-router-dom'
// import LandingPage from './components/LandingPage';
// import CustomerDetailsPage from './components/CustomerDetailsPage';
// import PageNotFound from './components/PageNotFound';

// const Routes = () => (
//   <main>
//     <BrowserRouter>
//     <Switch>
//       <Route exact path='/' component={LandingPage}/>
//       <Route path='/customer' component={CustomerDetailsPage}/>
//       <Route path="*" component={PageNotFound} />
//     </Switch>
//     </BrowserRouter>
//   </main>
// )

//export default Routes;