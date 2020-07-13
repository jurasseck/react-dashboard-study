import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'

import './styles.css'
import Sidebar from '../components/Sidebar'
import routes from '../routes'
const Layout = class Layout extends Component {
    render(){
        return (
            <div className="container">
                <Sidebar
                    {...this.props}
                    routes={routes}
                />
                <div>
                    <Switch>
                        {routes.map((prop, key) => {
                            return (  
                                <Route
                                    path={prop.layout + prop.path}
                                    component={prop.component}
                                    key={key}
                                 />
                            );
                        })}
                    </Switch>
                </div>
            </div>    
        )
    }
}

export default Layout
