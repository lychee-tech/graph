import React, {Component} from "react";
import Relay from "react-relay/classic";

class User extends  Component {
    render() {
        console.log(this.props.user);

        return (
            <div style={{backgroundColor:"red", height:"100px"}}>
               this is a user {this.props.user.firstName}
            </div>
        )
    }
}


export default Relay.createContainer(User, {
    initialVariables:{
        showLikes: false
    },

    fragments: {
    user: ()=>Relay.QL `
       fragment user on User {
        firstName,
        lastName,
        likesCount @include (if: $showLikes)
       }
    `
}});