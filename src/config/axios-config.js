import axios from "axios";

export default class AxiosConfig {
  static config = () => {
    axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
    axios.defaults.headers.common[
      "Authorization"
    ] = `bearer ${localStorage.getItem("token")}`;

    // TODO: config after refresh token implementation
    // https://medium.com/@monkov/react-using-axios-interceptor-for-token-refreshing-1477a4d5fc26
  };
}
