import { useWindowWidth } from '@react-hook/window-size/throttled';
import { useRef, useState } from 'react';

export const useRefState = <T>(initial: T | (() => T)) => {
  const [state, _setState] = useState<T>(initial);
  const stateRef = useRef(state);

  const setState = (value: T) => {
    _setState(value);
    stateRef.current = value;
  };

  return [state, setState, stateRef] as const;
};
