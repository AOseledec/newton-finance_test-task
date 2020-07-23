import React, { useState, useEffect } from 'react';

import service from '../../service';

import ItemList from '../item-list';
import Pagination from '../pagination';
import PostsPerPage from '../posts-per-page';

import './app.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [postPerPage, setPostPerPage] = useState(10);
  const [cur_page, setCurPage] = useState(1);
  const [next_page, setNextPage] = useState(2);
  const [prev_page, setPrevPage] = useState(1);

  const fetchPosts = (page: number, limit: number): void => {
    service.getPosts(page, limit)
      .then(data => data.json())
      .then(setPosts)
  };

  useEffect(() => {
    fetchPosts(1,postPerPage)
  }, [postPerPage]);

  const onClickPagination = (page: number): void => {
    if (page === 1) setPrevPage(page)
    else setPrevPage(page - 1);
    if (page === 100/postPerPage)  setNextPage(page)
    else setNextPage(page + 1)
    setCurPage(page);

    fetchPosts(page, postPerPage)
  };

  const handlePostPerPage = (value: number) => {
    setPostPerPage(value);
  };

  return (
    <main className='main'>
      <header className='navbar navbar-expand-lg navbar-dark bg-primary'>
        <div className="header-container">
          <h1 className='navbar-brand'>Posts:</h1>
          <PostsPerPage value={postPerPage} handleChange={handlePostPerPage}/>
        </div>
      </header>
      <Pagination next_page={next_page} prev_page={prev_page} onClickPagination={onClickPagination}/>
      <ItemList data={posts}/>
    </main>
  );
};

export default App;
