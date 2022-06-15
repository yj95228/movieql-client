import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const GET_MOVIE = gql`
  query getMovies($movieId: String!) {
    movie(id: $movieId) {
      id
      title
    }
  }
`;

export default function Movie() {
  const { id } = useParams();
  const { data, loading } = useQuery(GET_MOVIE, {
    variables: {
      movieId: id,
    },
  });
  console.log(data);
  if (loading) {
    return <h1>Fetcing movie...</h1>;
  }
  return <div>{data.movie.title}</div>;
}
