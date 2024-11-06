
import { usePlagueRepository } from '~/app/plague/repositories/plagueRepository';

export const useGetPlagueService = defineService(() => {

  const { getPlague } = usePlagueRepository();

  return {
    getPlagueService: getPlague
  };

});
