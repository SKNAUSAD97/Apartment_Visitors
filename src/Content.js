import React from "react";
import {Switch, Route} from "react-router-dom";
import Dashboard from "./Dashboard";
import Table from "./Tables";

const Content =()=>{
    return (
        <>
            <Switch>
                <Route exact path="/" component={Dashboard}/>
                <Route exact path="/dashboard" component={Dashboard}/>
                <Route exact path="/tables" component={Table}/>
            </Switch>
        </>
    )
}
export default Content;