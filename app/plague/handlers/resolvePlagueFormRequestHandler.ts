
import { useResolvePlagueService } from '~/app/plague/services/resolvePlagueService';

export const useResolvePlagueFormRequestHandler = defineHandler((
  plague_id: ReactiveData<string|number>,
  config: RequestParameters<typeof useFormRequest> = {}
) => {

  const { resolvePlagueService } = useResolvePlagueService();

  return useFormRequest({
    ...config,
    apiFunction: () => resolvePlagueService(
      useReactiveData(plague_id),
    ),
  });

});
