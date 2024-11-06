
import { useSuspectRepository } from '~/app/suspect/repositories/suspectRepository';

export const useGetSuspectService = defineService(() => {

  const { getSuspect } = useSuspectRepository();

  return {
    getSuspectService: getSuspect
  };

});
