
import { useGetSuspectService } from '~/app/suspect/services/getSuspectService';

export const useGetSuspectLoadingRequestHandler = defineHandler((
  suspect_id: ReactiveData<string|number>,
  config: RequestParameters<typeof useLoadingRequest> = {}
) => {

  const { getSuspectService } = useGetSuspectService();

  return useLoadingRequest({
    initialData: [],
    ...config,
    apiFunction: () => getSuspectService(
      useReactiveData(suspect_id)
    ),
  });

});
