import React, {Component} from "react";
import Relay from "react-relay/classic";

import User from "./User";


class App extends  Component {
    render () {
        return (
            <div>
                hello, world.
                <User/>
            </div>
        )
    }
}


export default Relay.createContainer(App, {fragments:{}});