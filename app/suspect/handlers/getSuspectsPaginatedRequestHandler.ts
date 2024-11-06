
import { useGetSuspectsService } from '~/app/suspect/services/getSuspectsService';

export const useGetSuspectsPaginatedRequestHandler = defineHandler((
  {
    aditionalParams,
    ...config
  }: PaginatedRequestParameters
) => {

  const { getSuspectsService } = useGetSuspectsService();

  return usePaginatedRequest({
    ...config,
    apiFunction: (params) => getSuspectsService(
      _merge(
        params,
        aditionalParams ? useReactiveData(aditionalParams) : {}
      )
    ),
  });

});
