import Relay from "react-relay/classic";
import App from "./App";


class AppRoute extends Relay.Route {
    static routeName = "App";
    static queries ={
        user : (Component) => Relay.QL `
         query {
          getUserById {
            ${Component.getFragment("user")}
          }
        }
        `
    }

}


export default AppRoute;