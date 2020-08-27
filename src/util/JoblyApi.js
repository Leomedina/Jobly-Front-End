import axios from 'axios';

class JoblyApi {

  static async request(endpoint, paramsOrData = {}, verb = "get") {
    paramsOrData._token = localStorage.getItem("token") || null;

    console.debug("API Call:", endpoint, paramsOrData, verb);

    try {
      return (await axios({
        method: verb,
        url: `http://localhost:3001/${endpoint}`,
        [verb === "get" ? "params" : "data"]: paramsOrData
      })).data;
      // axios sends query string data via the "params" key,
      // and request body data via the "data" key,
      // so the key we need depends on the HTTP verb
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    };
  };

  static async authRequest(username, password) {
    try {
      return (await axios({
        method: "post",
        url: "http://localhost:3001/login",
        data: {
          "username": username,
          "password": password,
        }
      })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    };
  };

  static async regRequest(username, password, first_name, last_name, email) {
    try {
      return (await axios({
        method: "post",
        url: "http://localhost:3001/users",
        data: {
          "username": username,
          "password": password,
          "first_name": first_name,
          "last_name": last_name,
          "email": email
        }
      })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    };
  };

  static async updateRequest(username, first_name, last_name, email, password) {
    try {
      return (await axios({
        method: "patch",
        url: `http://localhost:3001/users/${username}`,
        data: {
          "_token": `${localStorage.getItem("token")}`,
          "first_name": first_name,
          "last_name": last_name,
          "password": password,
          "email": email
        }
      })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    };
  };

  static async getCompany(handle) {
    const res = await this.request(`companies/${handle}`);
    return res.company;
  };

  static async getAllCompanies() {
    const res = await this.request('companies');
    return res.companies;
  };

  static async getAllJobs() {
    const res = await this.request('jobs');
    return res.jobs;
  };

  static async getCompanySearch(search) {
    const res = await this.request('companies', search);
    return res.companies;
  };

  static async getJobSearch(search) {
    const res = await this.request('jobs', search);
    return res.jobs;
  };

  static async login(username, password) {
    const res = await this.authRequest(username, password);
    return res.token;
  };

  static async register(username, password, first_name, last_name, email) {
    const res = await this.regRequest(username, password, first_name, last_name, email);
    return res.token;
  };

  static async update(username, first_name, last_name, email, password) {
    const res = await this.updateRequest(username, first_name, last_name, email, password);
    console.log(res, "api");
    return res;
  };

  static async apply(jobId) {
    try {
      return (await axios({
        method: "post",
        url: `http://localhost:3001/jobs/${jobId}/apply`,
        data: {
          "_token": `${localStorage.getItem("token")}`,
          "status": "applied"
        }
      })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    };
  };
};

export default JoblyApi;