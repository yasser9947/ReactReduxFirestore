import React, { Component, Fragment } from 'react'
import EventListItem from './EventListItem'

export default class EventList extends Component {
    render() {
        return (
            <Fragment>
                {this.props.events.map(event=>(

                    <EventListItem selectEvent = {this.props.selectEvent} deletEvent = {this.props.deletEvent}  key={event.id} event = {event}  />

                ))}
               
              
            </Fragment>
        )
    }
}
