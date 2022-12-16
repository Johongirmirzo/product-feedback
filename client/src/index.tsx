import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { store } from "./redux/store";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
