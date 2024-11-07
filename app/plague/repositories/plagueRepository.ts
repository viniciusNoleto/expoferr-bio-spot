
import { useExpoferrLaravelClient } from '~/clients/ExpoferrLaravelClient';

export const usePlagueRepository = defineRepository(useExpoferrLaravelClient, (client) => {

  const url = 'plague/';

  function getPlague(plague_id: string|number) {
    return client.get<{}>({ url: url + plague_id });
  };

  function getPlagues(params: object) {
    return client.get<any[]>({ url, params });
  };

  function storePlague(body: object) {
    return client.post<never>({ url, body });
  };

  function getPlagueTypes() {
    return client.get<any[]>({ url: url + 'plague-types/' });
  }

  function resolvePlague(plague_id: string|number) {
    return client.post<never>({ url: url + plague_id + '/resolve/' });
  }

  return {
    getPlague,
    getPlagues,
    storePlague,
    getPlagueTypes,
    resolvePlague
  };

});
