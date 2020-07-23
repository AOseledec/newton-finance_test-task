import React from 'react'

import './pagination.css';

const Pagination = ({next_page, prev_page, onClickPagination}: PaginationProps) => {
  return (
    <div>
      <ul className="pagination">
        <li className="page-item" onClick={() => onClickPagination(prev_page)}>
          <div className="page-link">&laquo;</div>
        </li>
        <li className="page-item" onClick={() => onClickPagination(next_page)}>
          <div className="page-link">&raquo;</div>
        </li>
      </ul>
    </div>
  );
};

export interface PaginationProps {
  next_page: number,
  prev_page: number,
  onClickPagination: (arg: number) => void
};

export default Pagination;
