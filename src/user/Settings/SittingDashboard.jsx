import React from 'react'
import { Grid } from 'semantic-ui-react'
import { SittingNav } from './SittingNav'
import { Route, Redirect, Switch } from 'react-router-dom'
import { BasicPage } from './BasicPage'
import { AboutPage } from './AboutPage'
import { AccountPage } from './AccountPage'
// PhotosPage  AccountPage
import { PhotosPage } from './PhotosPage'
export const SittingDashboard = () => {
    return (
        <Grid>
            <Grid.Column width={12}>
                <Switch >
                    <Redirect exact from='/Settings' to='/Settings/basic' />
                    <Route path='/Settings/basic' component={BasicPage} />
                    <Route path='/Settings/about' component={AboutPage} />
                    <Route path='/Settings/photos' component={PhotosPage} />
                    <Route path='/Settings/account' component={AccountPage} />
                </Switch >
            </Grid.Column>
            <Grid.Column width={4}>
                <SittingNav />
            </Grid.Column>
        </Grid>
    )
}
