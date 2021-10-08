import { QueryOnMount } from '../components/QueryOnMount';
import { ToggleQueryOnMount } from '../components/ToggleQueryOnMount';
import { AddData } from '../components/AddData';

export default function Home() {
  return (
    <>
      <h1>Olá :D</h1>
      <AddData />
      <QueryOnMount />
      <ToggleQueryOnMount />
    </>
  );
}
