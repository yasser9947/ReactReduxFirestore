import React, { Component } from 'react'
import { Menu, Button, Container } from 'semantic-ui-react'
import {NavLink ,Link} from 'react-router-dom'
import { SingOut } from './Menus/SingOut'
import  SingIn  from './Menus/SingIn'
export default class navebar extends Component {
  state = {
    authntcaided : true

  }
  authntcaided =()=> this.setState(({authntcaided})=> ({authntcaided : !authntcaided}))
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem  , authntcaided} = this.state
    return (
       <Menu inverted fixed="top">
         <Container>
           <Menu.Item as ={NavLink} exact to ='/' header>
             <img src="https://i.ytimg.com/vi/JXlkrRe_4b0/maxresdefault.jpg" alt="logo" />
             Re-vents
           </Menu.Item>
           <Menu.Item as ={NavLink} to ="/Events" name="Events" />
           <Menu.Item as ={NavLink} to ="/people" name="people" />
           <Menu.Item as ={NavLink} to ="/test" name="test" />


           <Menu.Item>
             <Button 
             as={Link}
             to ='/createEvent'
             floated="right" positive inverted content="Create Event" />
           </Menu.Item>
        {authntcaided ? <SingOut authntcaided={this.authntcaided}  /> : <SingIn  authntcaided ={this.authntcaided}/>}
         </Container>
       </Menu>
    )
  }
}
