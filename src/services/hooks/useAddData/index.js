import { useMutation, useQueryClient } from 'react-query';
import { restClient } from '../../clients';

import { getQueryKey } from '../useData';

export const useAddData = () =>
  useMutation((newData) => restClient.post('/data', newData));

// export const useAddData = () => {
//   const queryClient = useQueryClient();
//   return useMutation((newData) => restClient.post('/data', newData), {
//     onSuccess: () => {
//       queryClient.invalidateQueries(getQueryKey());
//     },
//   });
// };

// Optimistic Update
// export const useAddData = () => {
//   const queryClient = useQueryClient();
//   return useMutation((newData) => restClient.post('/data', newData), {
//     onMutate: async (newData) => {
//       await queryClient.cancelQueries(getQueryKey());

//       const previousData = queryClient.getQueryData(getQueryKey());

//       queryClient.setQueryData(getQueryKey(), (old) => [...old, newData.data]);

//       return previousData;
//     },

//     onError: (err, newTodo, context) => {
//       console.log({ context });
//       queryClient.setQueryData(getQueryKey(), context);
//     },

//     onSettled: () => {
//       queryClient.invalidateQueries(getQueryKey());
//     },
//   });
// };
