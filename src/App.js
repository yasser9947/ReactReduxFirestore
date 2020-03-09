import React from 'react';
import { Route } from 'react-router-dom'
import { Component, Fragment } from 'react'
import EventDashbord from './features/event/EventDashbord/EventDashbord';
import Navebar from './NaveBar/navebar.jsx';
import { Container } from 'semantic-ui-react';
import { EventDedatiled } from './features/event/EventDetailed/EventDedatiled';
import { PeopleDahsboard } from './user/PeopleDahsboard/PeopleDahsboard';
import { UserDetailedPage } from './user/UserDetailed/UserDetailedPage';
import { SittingDashboard } from './user/Settings/SittingDashboard';
import Eventform from './features/event/ِEventForm/Eventform';
import { HomePage } from './home/HomePage';
import TestComonent from './features/test/TestComonent';

export default class App extends Component {

  onc = () => {
    console.log("click")
  }
  render() {

    return (
      <Fragment>
           <Route exact path="/" component={HomePage} />
        <Route
          path="/(.+)"
          render={() => (
            <Fragment>
              <Navebar />
              <Container className="main">
              
                <Route exact path="/events" component={EventDashbord} />
                <Route path="/events/:id" component={EventDedatiled} />
                <Route path="/people" component={PeopleDahsboard} />
                <Route path="/profile/:id" component={UserDetailedPage} />
                <Route path="/Settings" component={SittingDashboard} />
                <Route path="/createEvent" component={Eventform} />
                <Route path="/test" component={TestComonent} />

              </Container>
            </Fragment>)} />
      </Fragment>

    )
  }
}
