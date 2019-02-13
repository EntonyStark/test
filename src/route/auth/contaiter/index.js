import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import AuthPage from "../components";
import { authReques } from "../../../actions/auth";

const mapStateToProps = state => ({
	token: state.auth.data
});

const mapDispatchToProps = dispatch => bindActionCreators({ authReques }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AuthPage);
