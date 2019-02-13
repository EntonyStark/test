import React from "react";
import { Input } from "antd";

export default ({ label, value, config }) => (
	<div>
		<label>{label}</label>
		<Input {...config} />
	</div>
);
