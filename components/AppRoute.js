import Relay from "react-relay/classic";
import App from "./App";


class AppRoute extends Relay.Route {
    static routeName = "App";
    static queries ={
        users : (Component) => Relay.QL `
         query {
          userPage {
             ${Component.getFragment("users")}
          }
        }
        `
    }

}


export default AppRoute;