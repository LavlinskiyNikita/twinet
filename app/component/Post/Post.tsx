import React, { FC } from 'react';

interface Ipost {
  nikname: string;
  username: string;
  imageavatr: string;
  bodytext?: string;
  img?: string;
}



const Post:FC<Ipost> = ({nikname, username, imageavatr, bodytext, img}) => {
  return (
    <div className="post">
      <div className="post__user">
        <img src={imageavatr} alt="" width={36} height={36} className="post__avatar"/>
        <a href="" className="post__username"> <p className="post__nikname">{nikname}</p> <span>@</span>{username}</a>
      </div>
      <div className="post__body">
        <p  className="post__title">{bodytext}</p>        
        <img className='post__img' src={img} alt="" />
      </div>
      <div className="post__down">
        <button className="post__btn post__like">
          <img width={26} height={26} src="./svg_icon/like.svg" alt="" />
        </button>
        <button className="post__btn post__comment">
          <img width={26} height={26} src="./svg_icon/comment.svg" alt="" />
        </button>
        <button className="post__btn post__favorite">
          <img width={26} height={26} src="./svg_icon/archive-add.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Post;