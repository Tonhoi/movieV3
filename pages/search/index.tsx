import axios from "@/axios.config";
import { GetServerSidePropsContext } from "next";

import Search, { SearchPageProps } from "@/containers/Search/Search";
import { TYPE_PARAMS } from "@/apis";

const index = (props: SearchPageProps) => {
  return <Search {...props} />;
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  try {
    const { page, query } = context.query;

    const resSearch = await axios.get(TYPE_PARAMS["search_multi"], {
      params: {
        query: query,
        include_adult: false,
        language: "en-US",
        page: page,
      },
    });

    return {
      props: {
        initData: [resSearch],
        fallback: true,
        revalidate: 30,
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
