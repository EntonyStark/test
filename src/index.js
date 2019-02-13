import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./route/App/container";
import store from "./store";

import "./style/index.scss";

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
