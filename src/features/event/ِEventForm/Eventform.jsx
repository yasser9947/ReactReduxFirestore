import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'

export default class Eventform extends Component {

    state = {
        title: "",
        date : '',
        city : '' ,
        venue :'' ,
        hostedBy :''
    }

    handleFormSumbmit = (evt) => {
        // evt.preventDefault();
       this.props.creatEvent(this.state);
        
    }

    handelInputchange = ({target :{name , value}}) => {
        this.setState({
            [name]: value
        })
    }
    render() {
        const { cansleFormOpen  } = this.props;
        const { title,date,city ,venue,hostedBy} = this.state;
        return (
            <Segment>
                <Form onSubmit={this.handleFormSumbmit} autoComplete ='off'>
                    <Form.Field>
                        <label>Event Title</label>
                        <input
                        name ='title'
                         onChange={this.handelInputchange} 
                         value={title} 
                         placeholder="Event Title" />
                    </Form.Field>
                    <Form.Field>
                        <label>Event Date</label>
                        <input name ='date'
                         onChange={this.handelInputchange} 
                         value={date} 
                         type="date" placeholder="Event Date" />
                    </Form.Field>
                    <Form.Field>
                        <label>City</label>
                        <input name ='city'
                         onChange={this.handelInputchange} 
                         value={city} 
                         placeholder="City event is taking place" />
                    </Form.Field>
                    <Form.Field>
                        <label>Venue</label>
                        <input  name ='venue'
                         onChange={this.handelInputchange} 
                         value={venue} 
                        placeholder="Enter the Venue of the event" />
                    </Form.Field>
                    <Form.Field>
                        <label>Hosted By</label>
                        <input name ='hostedBy'
                         onChange={this.handelInputchange} 
                         value={hostedBy} 
                         placeholder="Enter the name of person hosting" />
                    </Form.Field>
                    <Button positive type="submit">
                        Submit
                    </Button>
                    <Button onClick={cansleFormOpen} type="button">Cancel</Button>
                </Form>
            </Segment>
        )
    }
}
