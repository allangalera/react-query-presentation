import { useData } from '../../services/hooks/useData';

export const QueryOnMountDois = () => {
  const { data, isLoading, isError } = useData();

  if (isLoading) return <p>loading . . .</p>;
  if (isError) return <p>error :(</p>;

  return <p>{JSON.stringify(data, null, 2)}</p>;
};
