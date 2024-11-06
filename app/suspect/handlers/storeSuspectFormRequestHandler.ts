
import { useStoreSuspectService } from '~/app/suspect/services/storeSuspectService';

export const useStoreSuspectFormRequestHandler = defineHandler((
  form: ReactiveData<object>,
  config: RequestParameters<typeof useFormRequest> = {}
) => {

  const { storeSuspectService } = useStoreSuspectService();

  return useFormRequest({
    ...config,
    apiFunction: () => storeSuspectService(
      useReactiveData(form),
    ),
  });

});
