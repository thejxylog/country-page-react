import { useQuery } from '@tanstack/react-query';
import { getCountries } from '../services/apiCountry';

export function useCountries() {
  const {
    data: countries,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['countries'],
    queryFn: getCountries,
  });

  // const listRef = useRef(null);
  // useEffect(function () {
  //   async function fetchCountries() {
  //     listRef.current = await getCountries();
  //   }
  //   fetchCountries();
  // }, []);
  // return listRef.current;

  return { countries, isLoading };
}
