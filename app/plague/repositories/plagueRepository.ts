
import { useExpoferrLaravelClient } from '~/clients/ExpoferrLaravelClient';

export const usePlagueRepository = defineRepository(useExpoferrLaravelClient, (client) => {

  const url = 'plagues/';

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
    return client.get<any[]>({ url: 'plague-types/' });
  }

  return {
    getPlague,
    getPlagues,
    storePlague,
    getPlagueTypes
  };

});
