import React from "react";
import ReactDOM from "react-dom";
import { JssProvider } from "react-jss";
import "semantic-ui-css/semantic.css";
import {Provider} from "redux";
import { AppContainer } from "react-hot-loader";
import {App} from "./App";


const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <JssProvider classNamePrefix={ "mainApp-" }>
        <Component/>
      </JssProvider>
    </AppContainer>,
    document.getElementById("root")
  );
};

render(App);
if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./App", () => {
    render(App);
  });
}
