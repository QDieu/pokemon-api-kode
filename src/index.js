import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/redux-store";

import App from "./App";
import { HashRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <StrictMode>
        <App />
      </StrictMode>
    </Provider>
  </HashRouter>,
  rootElement
);
