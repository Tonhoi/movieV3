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
};

export default tvServices;
