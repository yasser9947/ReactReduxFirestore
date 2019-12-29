import React from 'react'
import { Menu, Button } from 'semantic-ui-react'

export const SingOut = ({authntcaided}) => {
    return (
        <Menu.Item position="right">
        <Button basic inverted content="Login" onClick ={authntcaided} />
        <Button basic inverted content="Sign Out" style={{marginLeft: '0.5em'}} />
      </Menu.Item>
    )
}
