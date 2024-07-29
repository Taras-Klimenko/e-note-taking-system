import { useEffect, useState, Dispatch, SetStateAction } from 'react';
import { NodeData } from '../utils/types';

type UseFocusedNodeIndexProps = {
  nodes: NodeData[];
};

export const useFocusedNodeIndex = ({
  nodes,
}: UseFocusedNodeIndexProps): [number, Dispatch<SetStateAction<number>>] => {
  const [focusedNodeIndex, setFocusedNodeIndex] = useState(0);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowUp') {
        setFocusedNodeIndex((index) => Math.max(0, index - 1));
      }
      if (event.key === 'ArrowDown') {
        setFocusedNodeIndex((index) => Math.min(nodes.length - 1, index + 1));
      }
    };
    document.addEventListener('keydown', onKeyDown);

    return () => {
      return document.removeEventListener('keydown', onKeyDown);
    };
  }, [nodes]);

  return [focusedNodeIndex, setFocusedNodeIndex];
};
