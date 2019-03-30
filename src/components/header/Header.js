import React, { Component } from 'react'
import './Header.scss'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <i className="material-icons nav" onClick={this.props.handleClick}>
                    menu
                    </i>
                <div className="bot-name">
                    <p>
                        Duck Bot
                    </p>
                </div>

                <div className="user-name">
                    <p>
                        duck-user
                    </p>
                </div>
            </div>
        )
    }
}