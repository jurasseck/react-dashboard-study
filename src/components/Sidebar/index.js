import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './styles.css'

const Sidebar = class Sidebar extends Component {
    state = {
        name: 'Luis Henrique'
    }
    render() { 
        return (
            <div className="sidebar">
                <ul>
                {this.props.routes.map((route, key) => {
                    return (
                    <li key={key}>
                        <NavLink
                            to={route.layout + route.path}
                        >
                            <p>{route.name}</p>
                        </NavLink>
                    </li>
                    )
                })}
                </ul>
            </div>
        )
    }
}

export default Sidebar
