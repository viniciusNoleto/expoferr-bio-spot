
import { useGetPlagueTypesService } from '~/app/plague/services/getPlagueTypesService';

export const useGetPlagueTypesLoadingRequestHandler = defineHandler((
  config: RequestParameters<typeof useLoadingRequest> = {}
) => {

  const { getPlagueTypesService } = useGetPlagueTypesService();

  return useLoadingRequest({
    initialData: [],
    ...config,
    apiFunction: getPlagueTypesService,
  });

});
