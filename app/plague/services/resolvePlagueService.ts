
import { usePlagueRepository } from '~/app/plague/repositories/plagueRepository';

export const useResolvePlagueService = defineService(() => {

  const { resolvePlague } = usePlagueRepository();

  return {
    resolvePlagueService: resolvePlague
  };

});
