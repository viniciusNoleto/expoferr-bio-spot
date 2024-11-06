
import { usePlagueRepository } from '~/app/plague/repositories/plagueRepository';

export const useGetPlaguesService = defineService(() => {

  const { getPlagues } = usePlagueRepository();

  return {
    getPlaguesService: getPlagues
  };

});
