import axios from "axios";

const instance = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  baseURL: "https://api.themoviedb.org/3",
  // params: {
  //   api_key: "9568cdb91fe0c79af33b87e59bb90d25",
  // },
  headers: {
    accept: "application/json",

    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTY4Y2RiOTFmZTBjNzlhZjMzYjg3ZTU5YmI5MGQyNSIsInN1YiI6IjYzNTY4OWQ5NDMyNTBmMDA3YWI3MDg0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WDsLxvIp2Vp6AFnzNV9fAzcYJGJks1z_HmoyercdbLQ",
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
