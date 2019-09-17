import React , {Component} from "react";
import {HashRouter,Route, Switch} from "react-router-dom";
import {ROUTE_HOME_PAGE,ROUTE_BOOKING} from './routeConstants';
import Bikes from "../views/Bikes";
import Home from "../views/Home";

class Router extends Component{

    render(){
        return(
        <HashRouter >
            <Switch>
                <Route exact path = {ROUTE_HOME_PAGE} history={this.props.history} component={Home}/>
                <Route exact path = {ROUTE_BOOKING} component={Bikes} />
            </Switch>
        </HashRouter>
        )
    }
}

export default Router;
