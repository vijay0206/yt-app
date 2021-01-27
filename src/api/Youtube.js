import axios from "axios";

const KEY = "AIzaSyB9wcrggTmHuTUO9U5tnKHsgxXqqqU22Zc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
