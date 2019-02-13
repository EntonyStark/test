import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import UserList from "../components";
import { getUserList } from "../../../actions/list";

const mapStateToProps = state => ({
	userList: state.userList.list,
	totalCount: state.userList.total,
	isFetching: state.userList.isFetching
});

const mapDispatchToProps = dispatch => bindActionCreators({ getUserList }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserList);
