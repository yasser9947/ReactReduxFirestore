import React from 'react';


import { Component, Fragment } from 'react'
import EventDashbord from './features/event/EventDashbord/EventDashbord';
import Navebar from './NaveBar/navebar.jsx';
import { Container } from 'semantic-ui-react';

export default class App extends Component {

  onc = () => {
    console.log("click")
  }
  render() {

    return (
      <Fragment>

        <Navebar />
        <Container className="main">
          <EventDashbord />
        </Container>
      </Fragment>
    )
  }
}
