import axios from "@/axios.config";

import { ResponeDataSchema } from "@/interfaces/responseSchema/utils";
import { TYPE_PARAMS } from "@/apis";
import { IPage, responseSchema } from "@/interfaces";
import ArtistInfo from "@/containers/ArtistInfo/ArtistInfo";
import { ArtistDetailProps, ArtistListProps } from "@/interfaces/responseSchema/Artist";
import {
  CreditProps,
  MoviesForActorProps,
  moviesForCrewProps,
} from "@/interfaces/responseSchema/MovieCredit";

interface PathsProps {
  params: {
    id: string;
  };
}

export type ArtistPageProps = IPage<
  [
    ArtistDetailProps,
    CreditProps<MoviesForActorProps, moviesForCrewProps>,
    CreditProps<MoviesForActorProps, moviesForCrewProps>
  ]
>;

const index = (props: ArtistPageProps) => {
  return <ArtistInfo {...props} />;
};

export async function getStaticPaths() {
  const paths: Array<PathsProps> = [];

  try {
    const resTrendingPerson: ResponeDataSchema = await axios.get(
      TYPE_PARAMS["trending_person"],
      {
        params: {
          language: "en-US",
        },
      }
    );
    // const resTrendingPerson: any = await axios.get("/trending/person/changes?page=1");

    resTrendingPerson.results.map((el: ArtistListProps) => {
      paths.push({ params: { id: `${el.id}` } });
    });
  } catch (error) {
    console.log("không đúng đường dẫn");
  }

  return {
    paths,
    fallback: true,
  };
}

interface ParamsProps {
  params: {
    type: string;
    id: string;
  };
}

export async function getStaticProps({ params }: ParamsProps) {
  try {
    const { id } = params;
    const resDetailPerson = await axios.get(`/person/${id}?language=en-US`);
    const resMovieCredit = await axios.get(`/person/${id}/movie_credits?language=en-US`);
    const resTvCredit = await axios.get(`/person/${id}/tv_credits?language=en-US`);

    return {
      props: {
        initData: [resDetailPerson, resMovieCredit, resTvCredit],
        fallback: true,
        revalidate: 60,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
}

export default index;
