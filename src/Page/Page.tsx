import { useFocusedNodeIndex } from './useFocusedNodeIndex';
import { useNavigate } from 'react-router-dom';
import { useAppState } from '../state/AppStateContext';
import { nanoid } from 'nanoid';
import { DndContext, DragOverlay, DragEndEvent } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import { Cover } from './Cover';
import { Spacer } from './Spacer';
import { NodeContainer } from '../Node/NodeContainer';
import { Title } from './Title';

export const Page = () => {
  const {
    title,
    nodes,
    cover,
    addNode,
    setTitle,
    reorderNodes,
    setCoverImage,
  } = useAppState();

  const [focusedNodeIndex, setFocusedNodeIndex] = useFocusedNodeIndex({
    nodes,
  });

  const navigate = useNavigate();

  const isHomePage =
    window.location.href === 'https://moonlit-conkies-e288a8.netlify.app/#' ||
    window.location.href === 'https://moonlit-conkies-e288a8.netlify.app/';

  const backButtonClickHandler = () => {
    navigate('/');
  };

  const handleDragEvent = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over?.id && active.id !== over?.id) {
      reorderNodes(active.id as string, over.id as string);
    }
  };

  return (
    <>
      <Cover filePath={cover} changePageCover={setCoverImage} />
      <div style={{ minHeight: '50dvh' }}>
        <Title addNode={addNode} title={title} changePageTitle={setTitle} />
        <DndContext onDragEnd={handleDragEvent}>
          <SortableContext items={nodes} strategy={verticalListSortingStrategy}>
            {nodes.map((node, index) => (
              <NodeContainer
                key={node.id}
                node={node}
                isFocused={focusedNodeIndex === index}
                updateFocusedIndex={setFocusedNodeIndex}
                index={index}
              />
            ))}
          </SortableContext>
          <DragOverlay />
        </DndContext>
        {isHomePage ? (
          <></>
        ) : (
          <button onClick={backButtonClickHandler}>Back</button>
        )}
        <Spacer
          showHint={!nodes.length}
          handleClick={() => {
            addNode({ type: 'text', value: '', id: nanoid() }, nodes.length);
          }}
        />
      </div>
    </>
  );
};
