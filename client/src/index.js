import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactsProvider from "./contexts/ContactsProvider";
import ConversationsProvider from "./contexts/ConvertationsProvider";

ReactDOM.render(
  <ContactsProvider>
    <ConversationsProvider>
      <App />
    </ConversationsProvider>
  </ContactsProvider>,
  document.getElementById("root")
);
