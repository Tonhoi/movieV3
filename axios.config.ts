import axios from "axios";

const instance = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "9568cdb91fe0c79af33b87e59bb90d25",
  },
});

instance.interceptors.request.use(
  async function (config) {
    // if (config.method === "post") {
    //   config.headers.Authorization = process.env.NEXT_PUBLIC_API_KEY;
    // }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  async function (err) {
    return Promise.reject(err);
  }
);

export default instance;
