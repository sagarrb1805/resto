import React, { Component } from 'react'
import { Connect, connect } from 'react-redux'
import PropTypes from 'prop-types'
// import {getRes} from '../actions/ResAction'
import { getRes } from './actions/ResActions'


export class Res extends Component {

    componentWillMount(){
        this.props.getRes()
    }

  render() {

    const resItems = this.props.res.map( re => (
        <div key={re.id}>
            <h2>{re.name}</h2>
            <h3>{re.locaion}</h3>
            <h4>{re.city}</h4>
        </div>
    ))

    return (
    <div>
        <h3>Res</h3>
        {resItems}
    </div>
      
    )
  }
}

const mapStateToProps = state =>({
    res: state.res.items
})

export default connect(mapStateToProps, {getRes}) (Res);