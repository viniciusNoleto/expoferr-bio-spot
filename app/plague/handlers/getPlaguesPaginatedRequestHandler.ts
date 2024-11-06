
import { useGetPlaguesService } from '~/app/plague/services/getPlaguesService';

export const useGetPlaguesPaginatedRequestHandler = defineHandler((
  {
    aditionalParams,
    ...config
  }: PaginatedRequestParameters
) => {

  const { getPlaguesService } = useGetPlaguesService();

  return usePaginatedRequest({
    ...config,
    apiFunction: (params) => getPlaguesService(
      _merge(
        params,
        aditionalParams ? useReactiveData(aditionalParams) : {}
      )
    ),
  });

});
