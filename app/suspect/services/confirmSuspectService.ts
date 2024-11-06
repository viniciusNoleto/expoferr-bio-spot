
import { useSuspectRepository } from '~/app/suspect/repositories/suspectRepository';

export const useConfirmSuspectService = defineService(() => {

  const { confirmSuspect } = useSuspectRepository();

  return {
    confirmSuspectService: confirmSuspect
  };

});
