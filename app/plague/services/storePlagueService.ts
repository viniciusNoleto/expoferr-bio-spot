
import { usePlagueRepository } from '~/app/plague/repositories/plagueRepository';

export const useStorePlagueService = defineService(() => {

  const { storePlague } = usePlagueRepository();

  return {
    storePlagueService: storePlague
  };

});
