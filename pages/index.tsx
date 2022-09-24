import type { GetServerSideProps, NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Paper } from '@mui/material';
import { DropResult } from '@hello-pangea/dnd';
import ListContent from '../models/ListContent';
import * as DragAndDropUtils from '../utils/DragAndDropUtils';
import * as ListContentHelpers from '../helpers/ListContentHelpers';
import DraggableList from './components/DraggableList';

const Home: NextPage<IndexPageProps> = ({ initialItems }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(process.browser);
  }, [])

  let [listContents, setListContents] = useState<ListContent[]>([]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setListContents(initialItems);
    }
  }, []);

  const onDragEnd = ({ destination, source }: DropResult) => {
    // dropped outside the list
    if (!destination) return;
    const newItems = DragAndDropUtils.reorder(listContents, source.index, destination.index);
    setListContents(newItems);
  };
  
  return (
    <div>
      <Paper>
        {isBrowser ? <DraggableList items={listContents} onDragEnd={onDragEnd} /> : null}
      </Paper>
    </div>
  );
};

interface IndexPageProps {
  initialItems: ListContent[];
};

export const getServerSideProps: GetServerSideProps<IndexPageProps> = async () => {
  const listContents = await ListContentHelpers.getListContents(10);
  return {
    props: {
      initialItems: listContents,
    },
  };
};

export default Home;
