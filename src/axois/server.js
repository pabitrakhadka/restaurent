import axios from "axios";
class Server {
  constructor() {
    this.header = {};
  }

  setAuth(token) {
    this.header = {
      Authorization: `Bearer ${token}`,
    };
  }
  get(path, parms) {
    return axios.get(path, {
      params: parms,
      headers: this.header,
    });
  }
  post(path, data) {
    return axios.post(path, data, {
      headers: this.header,
    });
  }
  put(path, data) {
    return axios.put(path, data, {
      headers: this.header,
    });
  }
  delete(path, parms) {
    return axios.delete(path, {
      params: parms,
      headers: this.header,
    });
  }
}

const server = new Server();
export default server;
