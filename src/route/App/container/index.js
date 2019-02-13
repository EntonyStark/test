import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import App from "../components";
import { setToken } from "../../../actions/auth";

const mapStateToProps = state => ({
	token: state.auth.data
});

const mapDispatchToProps = dispatch => bindActionCreators({ setToken }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
