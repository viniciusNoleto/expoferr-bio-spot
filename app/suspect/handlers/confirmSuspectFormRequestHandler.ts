
import { useConfirmSuspectService } from '~/app/suspect/services/confirmSuspectService';

export const useConfirmSuspectFormRequestHandler = defineHandler((
  suspect_id: ReactiveData<string|number>,
  form: ReactiveData<object>,
  config: RequestParameters<typeof useFormRequest> = {}
) => {

  const { confirmSuspectService } = useConfirmSuspectService();

  return useFormRequest({
    ...config,
    apiFunction: () => confirmSuspectService(
      useReactiveData(suspect_id),
      useReactiveData(form),
    ),
  });

});
