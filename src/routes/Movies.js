import { useApolloClient, gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ALL_MOVIES = gql`
  query getMovies {
    allMovies {
      title
      id
    }
  }
`;

export default function Movies() {
  const { data, loading, error } = useQuery(ALL_MOVIES);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Could not fetch :(</h1>;
  }
  return (
    <ul>
      {data.allMovies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
}
