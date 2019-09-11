import React from 'react';


import { Component } from 'react'
import EventDashbord from './features/event/EventDashbord/EventDashbord';
import Navebar from './NaveBar/navebar.jsx';

export default class App extends Component {

  onc = () => {
    console.log("click")
  }
  render() {

    return (
      <div className="App">
        
        <Navebar />
        <EventDashbord />
      </div>
    )
  }
}
