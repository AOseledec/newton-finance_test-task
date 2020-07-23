import React from 'react'

import './pagination.css';

const Pagination = ({nav, onClickPagination}: PaginationProps) => {
  return (
    <div className='my-pagination'>
      <button className="btn btn-outline-primary btn-sm" onClick={() => onClickPagination(nav.prev_page)}>&laquo;</button>
      {` page ${nav.cur_page} of ${nav.pages} `}
      <button className="btn btn-outline-primary btn-sm" onClick={() => onClickPagination(nav.next_page)}>&raquo;</button >
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
