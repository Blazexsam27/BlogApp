import { gql } from "@apollo/client";

export const LOAD_ARTICLES = gql`
  query {
    articles {
      id
      title
      body
    }
  }
`;
