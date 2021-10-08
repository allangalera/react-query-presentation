import { DEFAULT_DEPRECATION_REASON } from 'msw/lib/umd';
import { useQuery } from 'react-query';
import { restClient } from '../../clients';

export const DEFAULT_KEY = 'USE_DATA';

export const getQueryKey = () => DEFAULT_KEY;

export const useData = (options) =>
  useQuery(
    getQueryKey(),
    async () => {
      const { data } = await restClient.get('/data');
      return data;
    },
    options
  );
