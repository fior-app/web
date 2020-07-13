import axios from "axios";
import * as utils from "../util/utils";

export default class AxiosConfig {
  static config = () => {
    axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${utils.getWithExpiry("token")}`;

    // TODO: config after refresh token implementation
    // https://medium.com/@monkov/react-using-axios-interceptor-for-token-refreshing-1477a4d5fc26
  };
}
