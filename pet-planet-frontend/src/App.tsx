import { useQuery } from '@apollo/client';
import { PETS_QUERY } from './api/queries';

export default function App() {

  const { loading, error, data } = useQuery(PETS_QUERY);

  return (
    <div>
      <input type="text" placeholder="Search Pets..." />
    </div>
  )
}

