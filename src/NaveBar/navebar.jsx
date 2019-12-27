import React, { Component } from 'react'
import { Menu, Button, Container } from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'
export default class navebar extends Component {
  state = {

  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    return (
       <Menu inverted fixed="top">
         <Container>
           <Menu.Item as ={NavLink} to ='/' header>
             <img src="https://i.ytimg.com/vi/JXlkrRe_4b0/maxresdefault.jpg" alt="logo" />
             Re-vents
           </Menu.Item>
           <Menu.Item as ={NavLink} to ="/Events" name="Events" />
           <Menu.Item>
             <Button floated="right" positive inverted content="Create Event" />
           </Menu.Item>
           <Menu.Item position="right">
             <Button basic inverted content="Login" />
             <Button basic inverted content="Sign Out" style={{marginLeft: '0.5em'}} />
           </Menu.Item>
         </Container>
       </Menu>
    )
  }
}
