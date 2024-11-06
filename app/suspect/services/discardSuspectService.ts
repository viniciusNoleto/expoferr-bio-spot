
import { useSuspectRepository } from '~/app/suspect/repositories/suspectRepository';

export const useDiscardSuspectService = defineService(() => {

  const { discardSuspect } = useSuspectRepository();

  return {
    discardSuspectService: discardSuspect
  };

});
