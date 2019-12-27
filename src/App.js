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

export default class App extends Component {

  onc = () => {
    console.log("click")
  }
  render() {

    return (
      <Fragment>

        <Navebar />


        <Container className="main">
          <HomePage />
          <Route path="/events" component={EventDashbord} />
          <Route path="/events/:id" component={EventDedatiled} />
          <Route path="/people" component={PeopleDahsboard} />
          <Route path="/profile/:id" component={UserDetailedPage} />
          <Route path="/setting" component={SittingDashboard} />
          <Route path="/createEvent" component={Eventform} />



        </Container>
      </Fragment>
    )
  }
}
