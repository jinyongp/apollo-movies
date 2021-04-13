import { gql } from "@apollo/client";

export const GET_MOVIE = gql`
  query GetMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      year
      rating
      genres
    }
  }
`;

export const GET_MOVIES = gql`
  {
    movies {
      id
      title
      year
      rating
      genres
      runtime
      summary
      medium_cover_image
    }
  }
`;
