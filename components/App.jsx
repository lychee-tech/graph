import React, {Component} from "react";

import Relay from "react-relay/classic";
import AppRoute from "./AppRoute";
import UserList from "./UserList";
import UserPage from "./UserPage";



class App extends  Component {
    render () {
        return <Relay.RootContainer   Component={UserPage}  route={new AppRoute()}/>
    }
}


export default App;