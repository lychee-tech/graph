import React, {Component} from "react";
import Relay from "react-relay/classic";

import User from "./User";
class UserPage extends Component {

    render() {
        return (
            <div>
                hello, world
                {
                    this.props.users.connection.edges.map(e=> (<User key={e.node.id} user={e.node}/> ))

                }

            </div>
        )
    }
}

export default Relay.createContainer(UserPage, {
    initialVariables: {
      search: "abc"
    },

    fragments: {
    users: ()=>Relay.QL `
       fragment userPage on UserPage {
        connection (first:1, search: $search) {
             edges {
                node {
                    id, 
                    ${User.getFragment("user")} 
                }
             }
          }
       }
    `
}});