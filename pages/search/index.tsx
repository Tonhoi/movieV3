import Search from "@/containers/Search/Search";
import axios from "@/axios.config";
import { GetServerSidePropsContext } from "next";

const index = (props: any) => {
  return <Search {...props} />;
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  try {
    const { page, query } = context.query;

    const resSearch = await axios.get("/search/multi", {
      params: {
        query: query,
        include_adult: false,
        language: "en-US",
        page: page,
      },
    });

    return {
      props: {
        initialData: [resSearch],
        fallback: {
          [`/search/multi?query=${query}&include_adult=false&language=en-US&page=${page}`]:
            resSearch,
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

export default index;
