import Tv from "@/containers/Tv";
import { GetServerSidePropsContext } from "next";
import axios from "@/axios.config";
import { TYPE_PARAMS } from "@/apis";

const tv = (props: any) => {
  return <Tv {...props} />;
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  try {
    const serverRouter = context.query.page;

    const resDiscoverTv = await axios.get(TYPE_PARAMS["discover_tv"], {
      params: {
        include_adult: false,
        include_null_first_air_dates: false,
        language: "en-US",
        page: serverRouter,
        sort_by: "popularity.desc",
      },
    });

    const resGenres = await axios.get("/genre/tv/list", {
      params: {
        language: "vi",
      },
    });

    return {
      props: {
        initData: [resDiscoverTv, resGenres],
        fallback: {
          [`${TYPE_PARAMS["discover_tv"]}?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${serverRouter}&sort_by=popularity.desc`]:
            resDiscoverTv,
        },
      },
    };
  } catch (err) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
};
// askjdkjasd

export default tv;
