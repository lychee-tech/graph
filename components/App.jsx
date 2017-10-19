import React, {Component} from "react";

import Relay from "react-relay/classic";
import AppRoute from "./AppRoute";
import UserList from "./UserList";



class App extends  Component {
    render () {
        return <Relay.RootContainer   Component={UserList}  route={new AppRoute()}/>
    }
}


export default App;