import React, { Component } from "react";
import { Pagination, Spin } from "antd";

export default class UserList extends Component {
	componentDidMount() {
		const { getUserList } = this.props;

		getUserList();
	}

	onChange = (page, per_page) => {
		const { getUserList } = this.props;

		getUserList({
			page,
			per_page
		});
	};

	render() {
		const { userList, totalCount, isFetching } = this.props;

		return (
			<div>
				<Spin spinning={isFetching}>
					{userList &&
						userList.map(el => (
							<div key={el.id}>
								<img src={el.avatar} alt={el.first_name} />

								<h3>{el.first_name}</h3>
							</div>
						))}
				</Spin>

				<Pagination onChange={this.onChange} pageSize={3} defaultCurrent={1} total={totalCount} />
			</div>
		);
	}
}
