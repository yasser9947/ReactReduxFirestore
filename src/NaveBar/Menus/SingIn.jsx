import React from 'react'
import { Menu, Button, Image, Dropdown } from 'semantic-ui-react'
import {withRouter, Link } from 'react-router-dom'

 const SingIn = ({authntcaided , history}) => {
    return (
           <Menu.Item position="right">
             <Image avatar spaced="right" src='/assets/user.png' />
             <Dropdown pointing="top left" text="Username">
               <Dropdown.Menu>
                 <Dropdown.Item text="Create Event" icon="plus" />
                 <Dropdown.Item text="My Events" icon="calendar" />
                 <Dropdown.Item text="My Network" icon="users" />
                 <Dropdown.Item text="My Profile" icon="user" />
                 <Dropdown.Item as ={Link} to ='/Settings' text="Settings" icon="settings" />
                 <Dropdown.Item text="Sign Out" icon="power" onClick ={()=>  {
                      authntcaided() 
                      history.push('/') }} />
               </Dropdown.Menu>
             </Dropdown>
           </Menu.Item>
    )
}


export default withRouter (SingIn)