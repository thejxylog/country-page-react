import { useQuery } from '@tanstack/react-query';
import { getCountries, getListSize } from '../services/apiCountry';
import { useSearchParams } from 'react-router-dom';

export function useCountries() {
  const [searchParams] = useSearchParams();

  // SORT
  const sort = searchParams.get('sort') || 'population';

  // FILTER
  const regionRaw = searchParams.get('region') || [];
  const regionAll = regionRaw.length ? regionRaw.split(',') : [];

  // STATUS
  const statusRaw = searchParams.get('status') || [];
  const statusAll = statusRaw.length ? statusRaw.split(',') : [];

  // PAGINATION
  const page = searchParams.get('page') ? +searchParams.get('page') : 1;

  const {
    data: countries,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['countries', sort, regionAll, statusAll, page],
    queryFn: () => getCountries({ sort, regionAll, statusAll, page }),
  });

  return { countries, isLoading };
}
