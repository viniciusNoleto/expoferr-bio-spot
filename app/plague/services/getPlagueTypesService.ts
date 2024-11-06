
import { usePlagueRepository } from '~/app/plague/repositories/plagueRepository';

export const useGetPlagueTypesService = defineService(() => {

  const { getPlagueTypes } = usePlagueRepository();

  return {
    getPlagueTypesService: getPlagueTypes
  };

});
