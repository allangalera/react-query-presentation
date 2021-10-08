import { useState, useCallback } from 'react';
import { QueryOnMount } from '../QueryOnMount';

export const ToggleQueryOnMount = () => {
  const [isShowing, setIsShowing] = useState(false);

  const handleToggle = useCallback(() => {
    setIsShowing((state) => !state);
  }, [setIsShowing]);

  return (
    <>
      <button onClick={handleToggle}>Toggle</button>
      {isShowing ? <QueryOnMount /> : null}
    </>
  );
};
