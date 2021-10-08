import { useForm } from 'react-hook-form';
import { useAddData } from '../../services/hooks/useAddData';

export const AddData = () => {
  const { isLoading, isError, mutateAsync } = useAddData();
  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    try {
      await mutateAsync(data);
    } catch (err) {
      console.error(err);
    } finally {
      reset({ data: '' });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('data', { required: true })}></input>
        <input type="submit" disabled={!isValid || isLoading} />
        {isLoading ? <p>loading . . .</p> : null}
        {isError ? <p>error :(</p> : null}
      </form>
    </>
  );
};
