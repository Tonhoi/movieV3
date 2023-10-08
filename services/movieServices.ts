import { TYPE_PARAMS } from "@/apis";
import axios from "@/axios.config";

const movieServices = {
  getTrendingMovie: async () => {
    try {
      const res = await axios.get(TYPE_PARAMS["trending_movie"]);

      return res;
    } catch (error) {
      return {
        redirec: {
          destination: "/404",
          permanent: false,
        },
      };
    }
  },

  getNowPlayingMovie: async () => {
    try {
      const res = await axios.get(TYPE_PARAMS["now_playing"]);

      return res;
    } catch (error) {
      return {
        redirec: {
          destination: "/404",
          permanent: false,
        },
      };
    }
  },

  getUpComingMovie: async () => {
    try {
      const res = await axios.get(TYPE_PARAMS["upcoming"]);

      return res;
    } catch (error) {
      return {
        redirec: {
          destination: "/404",
          permanent: false,
        },
      };
    }
  },
};

export default movieServices;
