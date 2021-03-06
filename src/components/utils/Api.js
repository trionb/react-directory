
import axios from "axios";

const BASEURL = "https://api.randomuser.me/?results=20";


// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
    Search: function() {
    return axios.get(BASEURL);
  }
};
