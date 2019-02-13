import * as urls from "../constants/urls";

import UserList from "./userList/container";
import AuthPage from "./auth/contaiter";

export default [
	{
		id: 1,
		exact: true,
		path: urls.HOME,
		component: UserList,
		protected: true
	},
	{
		id: 2,
		exact: true,
		path: urls.AUTH,
		component: AuthPage
	}
];
