import React from 'react';
import ReactDOM from 'react-dom';
import AppRoute from "../components/AppRoute";
import Relay from "react-relay/classic";
import App from "../components/App";



ReactDOM.render(<Relay.RootContainer   Component={App}  route={new AppRoute()}/>, document.querySelector('#root'));
