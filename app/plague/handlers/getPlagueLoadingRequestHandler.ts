
import { useGetPlagueService } from '~/app/plague/services/getPlagueService';

export const useGetPlagueLoadingRequestHandler = defineHandler((
  plague_id: ReactiveData<string|number>,
  config: RequestParameters<typeof useLoadingRequest> = {}
) => {

  const { getPlagueService } = useGetPlagueService();

  return useLoadingRequest({
    initialData: [],
    ...config,
    apiFunction: () => getPlagueService(
      useReactiveData(plague_id)
    ),
  });

});
