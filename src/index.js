import React, { Component } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import Calculator from "./Components/Calculator";
import History from "./Components/History";
import store from "./store";

class App extends Component {
  render() {
    return (
      <div>
        <Calculator />
        <History />
      </div>
    );
  }
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
