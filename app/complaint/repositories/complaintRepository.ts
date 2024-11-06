
import type { IComplaint } from '~/app/complaint/models/Complaint';
import { useExpoferrLaravelClient } from '~/clients/ExpoferrLaravelClient';

export const useComplaintRepository = defineRepository(useExpoferrLaravelClient, (client) => {

  const url = 'complaints/';

  function getComplaint(complaint_id: string|number) {
    return client.get<IComplaint>({ url: url + complaint_id });
  };

  function getComplaints(params: object) {
    return client.get<IComplaint[]>({ url, params });
  };

  function storeComplaint(body: object) {
    return client.post<never>({ url, body });
  };

  return {
    getComplaint,
    getComplaints,
    storeComplaint,
  };

});
