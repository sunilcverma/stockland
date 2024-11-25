import { gql, useLazyQuery, useQuery } from '@apollo/client';
import { useState } from 'react';

const SEARCH_ALLPETS = gql(`
  query GetPets($filter: PetFilter) {
    pets(filter: $filter) {
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

function usePetFilters() {
  const [filters, _updateFilter] = useState({ 
    age: undefined,
    category: undefined, 
    name: undefined 
  });

  const updateFilter = (filterType, value) => {
    _updateFilter({
      [filterType]: value,
    });
  };

  return {
    models: { filters },
    operations: { updateFilter },
  };
}

export default function App() {

   // was failing when calling from queties.ts 
  //const { loading, error, data } = useQuery(PETS_QUERY);
   
    //const [searchFilter, setSearchFilter] = useState('');
    //const [executeSearch, {data}] = useLazyQuery(SEARCH_ALLPETS);\
    
    const { operations, models } = usePetFilters();
    const { data, loading, error, refetch } = useQuery(SEARCH_ALLPETS);


  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  //function to conditionally populate data
  function renderElement(myVar){
    if(myVar == true)
       return "Avaliable";
    return "Unavaliable";;
 }

 return (
  <div className="App">
    <h1>All Pets</h1>

    <div>
      <label>Search</label>
      <input
        onChange={(e) => operations.updateFilter("name", e.target.value)}
        type="string"
      />
    

    <button
      onClick={() =>
        refetch({
          filter: { name: models.filters.name },
        })
      }
    >
      Go!
    </button>
    </div>

    <br />

    <div>
      <table border={1}>
        <th>Name</th><th>DOB</th><th>Category</th><th>Avaliability</th>   
        {data.pets.map(pet => (
               <tr> 
                  <td>{pet.name}</td> <td>{pet.dob}</td> <td>{pet.category.name}</td>  <td> { renderElement(pet.available) }</td> 
                </tr>
            ))}

      </table>
    </div>

    
  </div>
);
}
