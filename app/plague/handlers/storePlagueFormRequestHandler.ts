
import { useStorePlagueService } from '~/app/plague/services/storePlagueService';

export const useStorePlagueFormRequestHandler = defineHandler((
  form: ReactiveData<object>,
  config: RequestParameters<typeof useFormRequest> = {}
) => {

  const { storePlagueService } = useStorePlagueService();

  return useFormRequest({
    ...config,
    apiFunction: () => storePlagueService(
      useReactiveData(form),
    ),
  });

});
