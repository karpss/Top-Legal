import { gql } from "@apollo/client";

export const FETCH_CHARACTERS_LIST = gql`
  query FetchCharactersList($page: Int!) {
    characters(page: $page) {
      info {
        count
      }
      results {
        id
        name
        image
        status
        type
        gender
        location {
          name
        }
      }
    }
  }
`;
