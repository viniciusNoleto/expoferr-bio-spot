
import { useDiscardSuspectService } from '~/app/suspect/services/discardSuspectService';

export const useDiscardSuspectFormRequestHandler = defineHandler((
  suspect_id: ReactiveData<string|number>,
  config: RequestParameters<typeof useFormRequest> = {}
) => {

  const { discardSuspectService } = useDiscardSuspectService();

  return useFormRequest({
    ...config,
    apiFunction: () => discardSuspectService(
      useReactiveData(suspect_id),
    ),
  });

});
