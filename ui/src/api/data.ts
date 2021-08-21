import { apiHeaders, request } from "./_base";

export const fetchData = async (endpoint: string) => {
  return request(`${endpoint}`).then(async (response) => {
    if (response.status == 500) {
      const resp = await response.json();
      throw resp;
    }
    return response.json();
  });
};
