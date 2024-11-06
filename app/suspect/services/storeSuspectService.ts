
import { useSuspectRepository } from '~/app/suspect/repositories/suspectRepository';

export const useStoreSuspectService = defineService(() => {

  const { storeSuspect } = useSuspectRepository();

  return {
    storeSuspectService: storeSuspect
  };

});
