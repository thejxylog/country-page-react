import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getListSize } from '../services/apiCountry';

export function useCountriesListSize() {
  const [searchParams] = useSearchParams();

  // SORT
  const sort = searchParams.get('sort') || 'population';

  // FILTER
  const regionRaw = searchParams.get('region') || [];
  const regionAll = regionRaw.length ? regionRaw.split(',') : [];

  // STATUS
  const statusRaw = searchParams.get('status') || [];
  const statusAll = statusRaw.length ? statusRaw.split(',') : [];

  const {
    data: listSize,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['countries', sort, regionAll, statusAll],
    queryFn: () => getListSize({ sort, regionAll, statusAll }),
  });

  return { listSize, isLoading };
}
