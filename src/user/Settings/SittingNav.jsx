import React ,{Fragment} from 'react'
import { Menu, Header, Grid } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export const SittingNav = () => {
    return (
       <Fragment>
           <Menu vertical>
             <Header icon="user" attached inverted color="grey" content="Profile" />
             <Menu.Item as ={NavLink} to = '/Settings/basic'>Basics</Menu.Item>
             <Menu.Item as ={NavLink} to = '/Settings/about' >About Me</Menu.Item>
             <Menu.Item as ={NavLink} to = '/Settings/photos'>My Photos</Menu.Item>
           </Menu>
           <Grid.Row />
           <Menu vertical>
             <Header
               icon="settings"
               attached
               inverted
               color="grey"
               content="Account"
             />
             <Menu.Item>My Account</Menu.Item>
           </Menu>
       
           </Fragment>


    )
}
