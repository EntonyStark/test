import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import { AUTH } from "../../../constants/urls";

import routers from "../../index";

export default class App extends Component {
	componentDidMount() {
		const { setToken } = this.props;

		const token = JSON.parse(localStorage.getItem("token"));
		if (token) {
			setToken(token);
		}
	}

	render() {
		const { token } = this.props;
		return (
			<BrowserRouter>
				<Switch>
					{routers.map(el => (
						<Route
							key={el.id}
							path={el.path}
							exact={el.exact}
							render={props => {
								if (el.protected) {
									if (!token) {
										return <Redirect to={AUTH} />;
									}
								}

								return (
									<>
										<header>
											<Link to="/">home</Link>
											<Link to="/auth">auth</Link>
										</header>
										<el.component {...props} />
									</>
								);
							}}
						/>
					))}
				</Switch>
			</BrowserRouter>
		);
	}
}
