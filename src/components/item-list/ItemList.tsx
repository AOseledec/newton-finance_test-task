import React from 'react';

import Item from '../item';

import './item-list.css'

const ItemList = ({data}: ListItemProps ) => {
  return (
    <div className="contianer">
      <div className='card-columns'>
        {
          !!data && data.map((data) => {
            return <Item key={data.id} data={data}/>
          })
        }
      </div>
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
