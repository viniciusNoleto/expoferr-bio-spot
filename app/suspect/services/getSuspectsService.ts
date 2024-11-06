
import { useSuspectRepository } from '~/app/suspect/repositories/suspectRepository';

export const useGetSuspectsService = defineService(() => {

  const { getSuspects } = useSuspectRepository();

  return {
    getSuspectsService: getSuspects
  };

});
