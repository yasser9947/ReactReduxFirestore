import React from 'react'
import {Grid} from 'semantic-ui-react'
import { EventditalHeader } from './EventditalHeader'
import { EventDitailInfo } from './EventDitailInfo'
import { EventDitailChat } from './EventDitailChat'
import { EventDitailSidebar } from './EventDitailSidebar'
export const EventDedatiled = () => {
    return (
        <Grid>
            <Grid.Column width = {10}>
            <EventditalHeader />
            <EventDitailInfo /> 
            <EventDitailChat />

            </Grid.Column>
            <Grid.Column width = {6}>

                <EventDitailSidebar />
            </Grid.Column>
        </Grid>
    )
}
