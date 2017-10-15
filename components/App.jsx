import React, {Component} from "react";
import Relay from "react-relay/classic";



class App extends  Component {
    render () {
        console.log("hello", this.props.user);

        return (
            <div>
                hello, world, {this.props.user.firstName}

            </div>
        )
    }
}


export default Relay.createContainer(App, {fragments: {
    user: ()=>Relay.QL `
       fragment OneUser on User {
        id,
        firstName,
        lastName
       }
    `
}});