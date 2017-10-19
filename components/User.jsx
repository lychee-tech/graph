import React, {Component} from "react";
import Relay from "react-relay/classic";

class User extends  Component {
    render() {
        return (
            <div>
               this is a user {this.props.user.firstName}
            </div>
        )
    }
}



export default Relay.createContainer(User, {fragments: {
    user: ()=>Relay.QL `
       fragment user on User {
        firstName,
        lastName
       }
    `
}});