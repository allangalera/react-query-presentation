import { useMemo, useState, useCallback } from 'react';
import { QueryOnMountDois } from '../QueryOnMount2';

export const ToggleQueryOnMount = () => {
  const [isShowing, setIsShowing] = useState(false);

  const handleToggle = useCallback(() => {
    setIsShowing((state) => !state);
  }, [setIsShowing]);

  const render = useMemo(() => {
    const finalRender = [<button onClick={handleToggle}>Toggle</button>];
    if (isShowing) finalRender.push(<QueryOnMountDois />);

    return finalRender;
  }, [isShowing, handleToggle]);

  return render;
};
