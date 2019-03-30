import React, { Component } from 'react'
import './Sidenav.scss'

export default class Sidenav extends Component {

    render() {
        return(
            <div className={this.props.active ? "sidenav" : "sidenav-active"}>
                
            </div>
        )
    }
}