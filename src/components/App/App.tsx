import React, { useState, useEffect } from 'react';

import service from '../../service';

import ItemList from '../item-list';
import Pagination from '../pagination';
import PostsPerPage from '../posts-per-page';

import './app.css';

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    service.getPosts()
      .then(setPosts)
  }, []);
  
  const [cur_page, setCurPage] = useState(1);
  const [next_page, setNextPage] = useState(2);
  const [prev_page, setPrevPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10)

  const count: number = posts.length,
        pages: number = Math.ceil(count/postPerPage),
        navigation = {
          cur_page,
          next_page,
          prev_page,
          pages
        };

  const onClickPagination = (page: number): void => {
    setCurPage(page);
    if (page - 1 !== 0) setPrevPage(page-1)
    else setPrevPage(pages);
    if (page !== pages) setNextPage(page + 1)
    else setNextPage(1);
  };

  const handlePostPerPage = (value: number) => {
    setPostPerPage(value);
  };

  const cutPosts = posts.filter((item, idx) => {
    if (idx >= (cur_page-1) * postPerPage && idx < cur_page * postPerPage)
    return item;
    return false
  });

  return (
    <main>
      <header className='header'>
        <h1 className='app__title'>Posts:</h1>
        <PostsPerPage value={postPerPage} handleChange={handlePostPerPage}/>
      </header>
      <ItemList data={cutPosts}/>
      <Pagination nav={navigation} onClickPagination={onClickPagination}/>
    </main>
  );
};

export default App;
