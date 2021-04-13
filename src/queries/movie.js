import { gql } from "@apollo/client";

export const GET_MOVIE = gql`
  query GetMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      year
      rating
      genres
      runtime
      description_full
      large_cover_image
    }
  }
`;

export const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;
