
import { useExpoferrLaravelClient } from '~/clients/ExpoferrLaravelClient';

export const useSuspectRepository = defineRepository(useExpoferrLaravelClient, (client) => {

  const url = 'suspects/';

  function getSuspect(suspect_id: string|number) {
    return client.get<{}>({ url: url + suspect_id });
  };

  function getSuspects(params: object) {
    return client.get<any[]>({ url, params });
  };

  function storeSuspect(body: object) {
    return client.post<never>({ url, body });
  };

  return {
    getSuspect,
    getSuspects,
    storeSuspect,
  };

});
