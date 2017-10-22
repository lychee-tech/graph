import React, {Component} from "react";
import Relay from "react-relay/classic";

import User from "./User";
class UserPage extends Component {

    render() {
        console.log("hello", this.props.users.edges);

        return (
            <div>
                hello, world
                {
                    this.props.users.edges.map(e=> (<User key={e.node.id} user={e.node}/> ))

                }

            </div>
        )
    }
}

export default Relay.createContainer(UserPage, {fragments: {
    users: ()=>Relay.QL `
       fragment userPage on UserConnection {
         edges {
           node {
                id, 
                ${User.getFragment("user")} 
           }
         }
       }
    `
}});