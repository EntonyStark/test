import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { HOME } from "../../../constants/urls";

import Input from "../../../components/templates";

export default class AuthPage extends Component {
	state = {
		authForm: {
			email: {
				label: "Enter your email",
				value: "",
				config: {
					type: "email"
				}
			},
			password: {
				label: "Enter your password",
				value: "",
				config: {
					type: "password"
				}
			}
		}
	};

	onChangeHandler = e => {
		const { value, name } = e.target;

		this.setState(prevState => ({
			...prevState,
			authForm: {
				...prevState.authForm,
				[name]: {
					...prevState.authForm[name],
					value
				}
			}
		}));
	};

	submit = e => {
		e.preventDefault();
		const { authReques } = this.props;
		const { authForm } = this.state;

		const data = Object.keys(authForm).reduce(
			(prev, elem) => ({ ...prev, [elem]: authForm[elem].value }),
			{}
		);

		authReques(data);
	};

	render() {
		const { authForm } = this.state;
		const { token } = this.props;

		if (token) {
			return <Redirect to={HOME} />;
		}

		return (
			<div>
				<form onSubmit={this.submit}>
					{Object.keys(authForm).map(el => (
						<Input
							key={el}
							label={authForm[el].label}
							config={{
								...authForm[el].config,
								name: el,
								value: authForm[el].value,
								onChange: this.onChangeHandler
							}}
						/>
					))}

					<button type="submit">Login</button>
				</form>
			</div>
		);
	}
}
