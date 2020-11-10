import axios from "axios";
const BASEURL = "https://cors-anywhere.herokuapp.com/https://randomuser.me/api/?results=200&nat=us";

export default {
  search: function() {
    return axios.get(BASEURL);
  }
};
