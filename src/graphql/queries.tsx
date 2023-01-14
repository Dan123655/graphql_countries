import gql from "graphql-tag";
export const GET_COUNTRIES = gql`
  query {
    countries{
      name
      code
    }
  }
`;

export const GET_LANGUAGE = gql`
query ($code: ID!) {
  country(code: $code) {
    emoji
  languages {
  name
  }
  }
  }
`;