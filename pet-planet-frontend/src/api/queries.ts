import { gql } from "../__generated__";

export const PETS_QUERY = gql(`
  query PETS_QUERY{
    pets {
      ...PET_READ_FRAGMENT
    }
  }
`);

