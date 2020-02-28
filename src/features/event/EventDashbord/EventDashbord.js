import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react'
import EventList from '../EventList/EventList'
import { connect} from 'react-redux'
import Eventform from '../ِEventForm/Eventform'
import cuid from 'cuid'
import {createEvent , updateEvent , deletEvent}  from '../eventActions'

const mapState = (state) =>({
    events : state.events

})
const actions = {
    createEvent , deletEvent ,updateEvent
}
class EventDashbord extends Component {
    state = {
       selectEvent : null,
        isOpen: false
    }
    
    handelIsOpentuggil = ()=>{
        this.setState((p)=>({
            isOpen: !p.isOpen , selectEvent : null
        }))
    }
    handleCreateevent = (newEvent)=>{
        newEvent.id= cuid();
        newEvent.hostPhotoURL = 'data:image/jpeg;base64,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'
   this.setState ({
      
       isOpen : false,
   })
   this.props.createEvent(newEvent)
   
    }
    handleUpdateEvent = (updateevent)=>{
        console.log(updateevent)
        this.props.updateEvent(updateevent)
        this.setState({
            isOpen : false , selectEvent : null
        })
    }

    handleDeletEvent = id =>{
        this.props.deletEvent(id)

    }
    updatehandlerEvent = (event) =>{
        this.setState({
            isOpen : true , selectEvent : event
        })

    }
    render() {
        const {events} = this.props
        const {  isOpen } = this.state;
        return (

            <Grid>
                <Grid.Column width={10}>
                    <EventList events={events} deletEvent = {this.handleDeletEvent} selectEvent = {this.updatehandlerEvent} />
                </Grid.Column>
                <Grid.Column width={6}>
                    <Button onClick={this.handelIsOpentuggil} positive content="Creat Event" />
                    {isOpen && <Eventform creatEvent ={this.handleCreateevent}
                    cansleFormOpen = {this.handelIsOpentuggil} selectEvent= {this.state.selectEvent} handleUpdateEvent = {this.handleUpdateEvent} />}


                </Grid.Column>
            </Grid>

        )
    }
}


export default connect(mapState ,actions)(EventDashbord)