import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ReactDOM from "react-dom/client";
import "bootswatch/dist/lux/bootstrap.min.css";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App title="TaskDaisho" />
    </React.StrictMode>
  </Provider>
);
