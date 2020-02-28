import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incremntCountrt, decrmentCountrt } from './testAction'
import { Button } from 'semantic-ui-react'
const mapStateToProps = (state) => ({
    data: state.data, 
    name : state.name
})

const actions = {
    incremntCountrt, decrmentCountrt
}
class TestComonent extends Component {
    render() {
        console.log(this.props);
        
        const { data, incremntCountrt, decrmentCountrt , name } = this.props
        return (
            <div>
             <h1>Test Componend  {name}</h1>
                <h2>the inswer is : {data}</h2>
                <Button content = "incremnt " color= "green" onClick = {incremntCountrt} />
                <Button content = "decrment "  color= "red"   onClick = {decrmentCountrt}/>
 
            </div>
        )
    }
}

export default connect(mapStateToProps, actions)(TestComonent)
