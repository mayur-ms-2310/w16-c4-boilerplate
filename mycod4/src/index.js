import React from "react";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import { store } from "./Redux/store";
import {BrowserRouter} from "react-router-dom"
import { Provider } from "react-redux";
const container = document.getElementById("root");
const root = createRoot(container);

root.render
(
    <BrowserRouter>
    <Provider store= {store}>
<App />
</Provider>
    </BrowserRouter>


);
