import { TYPE_PARAMS } from "@/apis";
import axios from "@/axios.config";

const artistServices = {
  getPopularArtist: async () => {
    try {
      const res = await axios.get(TYPE_PARAMS["trending_person"]);

      return res;
    } catch (error) {
      console.log(error);
    }
  },
};

export default artistServices;
