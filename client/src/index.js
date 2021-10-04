import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Store from "./store/store";

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider
    value={{
      superhero: new Store(),
    }}
  >
    <App />
  </Context.Provider>,
  document.getElementById("root")
);
