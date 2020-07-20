import React from 'react'

import './pagination.css';

const Pagination = ({nav, onClickPagination}: PaginationProps) => {
  return (
    <div className='pagination'>
      <button onClick={() => onClickPagination(nav.prev_page)}>{'< prev'}</button>
      {` page ${nav.cur_page} of ${nav.pages} `}
      <button onClick={() => onClickPagination(nav.next_page)}>{'next >'}</button>
    </div>
  );
};

export interface navTypes {
  prev_page: number,
  cur_page: number,
  next_page: number,
  pages: number
}

export interface PaginationProps {
  nav: navTypes,
  onClickPagination: (arg: number) => void
};

export default Pagination;
