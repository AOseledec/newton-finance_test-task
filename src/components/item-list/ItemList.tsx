import React from 'react';

import Item from '../item';

import './item-list.css'

const ItemList = ({data}: ListItemProps ) => {
  return (
    <div className='list-container'>
      {
        !!data && data.map((i) => {
          return <Item key={i.id} data={i}/>
        })
      }
    </div>
  );
}

export interface dataTypes {
  userId: number,
  id: number,
  title: string,
  body: string
};

export interface ListItemProps {
  data: Array<dataTypes> | undefined
};

export default ItemList;
