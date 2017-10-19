import React, {Component} from "react";
import Relay from "react-relay/classic";
import User from "./User";


class App extends  Component {
    render () {
        console.log("hello", this.props.users);

        return (
            <div>
                hello, world
                {
                   this.props.users.allUsers.map(u => (<User key={u.id} user={u}/> ))

                }

            </div>
        )
    }
}


export default Relay.createContainer(App, {fragments: {
    users: ()=>Relay.QL `
       fragment userList on UserList {
         allUsers {
           id, 
           ${User.getFragment("user")} 
         }
       }
    `
}});