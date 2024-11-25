import { gql } from "../__generated__";

export const PETS_QUERY = gql(`
  
  query PetsQuery {
    pets {
      id
      name
      dob
      category {
        id
        name
      }
      available
    }
  }
      
`);


export const GET_PETS = gql(`
  
  query GetPets {
    pets {
      id
      name
      dob
      available
    }
  }
      
`);

export const GET_MYPETS = gql(`
  query GetPets {
    pets {
      id
      name
      dob
      available
    }
  }
`);

