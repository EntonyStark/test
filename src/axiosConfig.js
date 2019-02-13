import axios from "axios";

const AxiosInstance = axios.create({
	baseURL: "https://reqres.in/",
	headers: {
		"Content-Type": "application/json"
	}
});

export default info => {
	const { url, method = "GET", params, data } = info;
	const result = AxiosInstance({ url, method, params, data });
	return result;
};
