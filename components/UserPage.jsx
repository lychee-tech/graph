import React, {Component} from "react";
import Relay from "react-relay/classic";

import User from "./User";
class UserPage extends Component {
    constructor(props){
        super(props);
        this.search = this.search.bind(this);
        this.count=0;
    }

    search(){
        this.count ++;
        this.props.relay.setVariables({search:"changed" + this.count});
    }
    render() {
        return (


            <div>
                <div>
                    <input /> <button onClick={this.search}> Search </button>
                </div>

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