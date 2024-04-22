import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Toaster } from "sonner";
import { AuthContextProvider } from "./context/authContext";
import "./index.css";
import { Routing } from "./router/routing";
import { store } from "./store/configureStore.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <Provider store={store}>
        <Toaster position="top-right" />
        <Routing />
      </Provider>
    </AuthContextProvider>
  </React.StrictMode>
);
