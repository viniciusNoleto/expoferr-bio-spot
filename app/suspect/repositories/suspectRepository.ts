
import { useExpoferrLaravelClient } from '~/clients/ExpoferrLaravelClient';

export const useSuspectRepository = defineRepository(useExpoferrLaravelClient, (client) => {

  const url = 'suspects/';

  function getSuspect(suspect_id: string|number) {
    return client.get<{}>({ url: url + suspect_id });
  };

  function confirmSuspect(suspect_id: string|number, body: object) {
    return client.post<never>({ url: url + suspect_id + '/confirm', body });
  };

  function discardSuspect(suspect_id: string|number) {
    return client.post<never>({ url: url + suspect_id + '/discard' });
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
    confirmSuspect,
    discardSuspect
  };

});
