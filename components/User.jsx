import React, {Component} from "react";
import Relay from "react-relay/classic";

class User extends  Component {
    constructor(args){
        super(args);
        this.showLikes = this.showLikes.bind(this);
    }

    showLikes() {
        this.props.relay.setVariables({showLikes:true})
    }

    render() {
        console.log(this.props.user);

        return (
            <div style={{backgroundColor:"red", height:"100px"}} onClick={this.showLikes}>
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