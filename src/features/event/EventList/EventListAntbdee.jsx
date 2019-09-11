import React, { Component } from 'react'
import { List, Image } from 'semantic-ui-react'

export default class EventListAntbdee extends Component {
    render() {
        const {antbdee} = this.props
        return (
           <List.Item>
               <Image as = "a" size = "mini" circular
                src ={antbdee.photoURL} />

           </List.Item>
        )
    }
}
