import { TYPE_PARAMS } from "@/apis";
import axios from "@/axios.config";

const tvServices = {
  getTrendingTv: async () => {
    try {
      const res = await axios.get(TYPE_PARAMS["airing_today"]);

      return res;
    } catch (error) {
      console.log(error);
    }
  },

  getDiscoverTv: async (page: number) => {
    try {
      const res = await axios.get(TYPE_PARAMS["discover_tv"], {
        params: {
          include_adult: false,
          include_null_first_air_dates: false,
          language: "en-US",
          page: page,
          sort_by: "popularity.desc",
        },
      });

      return res;
    } catch (error) {
      console.log(error);
    }
  },
};

export default tvServices;
