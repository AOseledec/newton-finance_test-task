import React, { useState, MouseEvent } from 'react'

import service from '../../service';

import Button from '../button'

import './item.css'

const Item = ({data}: ItemProps) => {
  const [comments, setComments] = useState([]);
  const [loadingComment, setLoadingComment] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const fetchComments = () => {
    service.getComment(data.id)
      .then(setComments)
    setLoadingComment(true)
  };

  const switchShowComment = () => {
    setShowComment(!showComment);
  };

  const onClickButton = () => {
    if (!loadingComment) fetchComments();
    switchShowComment();
  };

  const classCard = isFavorite ? 'card card_gold' : 'card';
  const cardStyle:React.CSSProperties | undefined = showComment ?
    {
      gridRow: `${Math.ceil(data.id / 2)}/${comments.length}`
    } : undefined;
  const listComment = comments.map(({id, name, body}) => {
    return (
      <div key={id} className="card__comment comment">
        <h3 className="comment__title">{id}){name}</h3>
        <p className="comment__body">{body}</p>
      </div>
    )
  });

  const onDbClick = (e: MouseEvent) => {    
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <article style={cardStyle} onDoubleClick={onDbClick} className={classCard}>
        <h3 className='card__title'>{data.id}) {data.title}</h3>
        <div className='card__body'>{data.body}</div>
        <Button className='card__btn' onClick={onClickButton}/>
        {showComment && listComment}
      </article>
    </>
  )
}

export interface dataTypes {
  userId: number,
  id: number,
  title: string,
  body: string
};

export interface ItemProps {
  data: dataTypes
};

export default Item;
