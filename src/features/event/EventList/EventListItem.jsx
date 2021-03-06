import React, { Component } from 'react'
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react'
import EventListAntbdee from './EventListAntbdee'
import { Link } from 'react-router-dom'

export default class EventListItem extends Component {
    render() {
        const {event} = this.props
        return (
               <Segment.Group>
                  <Segment>
                    <Item.Group>
                      <Item>
                        <Item.Image size="tiny" circular src={event.hostPhotoURL} />
                        <Item.Content>
                          <Item.Header >{event.title }</Item.Header>
                          <Item.Description>
                            Hosted by {event.hostedBy}
                          </Item.Description>
                        </Item.Content>
                      </Item>
                    </Item.Group>
                  </Segment>
                  <Segment>
                    <span>
                      <Icon name="clock" /> {event.date} |
                      <Icon name="marker" /> {event.venue}
                    </span>
                  </Segment>
                  <Segment secondary>
                    <List horizontal>
                     {event.attendees && event.attendees.map(attendee=>(

            <EventListAntbdee  key={attendee.id} antbdee = {attendee}  />

))}

                    </List>
                  </Segment>
                  <Segment clearing>
                      <span> {event.description} </span>
                    <Button as={Link} to = {`/events/${event.id}`} color="teal" floated="right" content="View " />
                    <Button as="a" color="teal" floated="right" content="Delete" negative onClick = {()=>this.props.deletEvent(event.id)} />
                  </Segment>
                </Segment.Group>
        )
    }
}
