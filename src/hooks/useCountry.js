import { useMutation } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getCountry } from '../services/apiCountry';

export function useCreateProject() {
  const params = useParams();

  const { mutate: country, isLoading } = useMutation({
    mutationKey: ['country'],
    mutationFn: () => getCountry(params.country),
  });

  return { country, isLoading };
}
