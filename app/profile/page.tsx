'use client'

import React, { useState } from 'react';
import Post from '../component/Post/Post';
import Filter from '../component/filter/filter';

const page = () => {
  const [fiters, setFilters] = useState([
    {id: 1, title: "all", name: "all",},
    {id: 2, title: "post", name: "post",},
    {id: 1241, title: "account", name: "account",},
    {id: 11342671347, title: "hashtag", name: "hashtag",}
  ])

  return (
    <div className="profile">
      <div className="profile__banner">
        <div className="profile__shadow"></div>
        <img className='profile__img-banner' src="https://www.imgcorporations.com/images/bg-img.jpg" alt="" />
      </div>
      <div className="profile__body">
        <div className="profile__inforamtion-user">
          <div className="profile__aratar">
            <img width={97} height={97} src="https://images.immediate.co.uk/production/volatile/sites/4/2021/08/mountains-7ddde89.jpg?resize=768,574" alt="" className="profile__image-user" />
            <p className="profile__name-user">name</p>
          </div>
          <div className="profile__description">
            <p className="profile__description-text">descr🐱‍🚀🐭🕸🐥🦠🦆🕷🕷🦂🦂🐞🐞🐞</p>
          </div>
          <div className="profile__follower">
            <a href='./' className="mini-profile__item">
              <p className="profile__follow-text">followers</p>
              <p className="profile__follow-count">0</p>
            </a>
            <a href='./' className="mini-profile__item">
              <p className="profile__follow-text">post</p>
              <p className="profile__follow-count">0</p>
            </a>
            <a href='./' className="mini-profile__item">
              <p className="profile__follow-text">following</p>
              <p className="mini-profile__follow-count">0</p>
            </a>
          </div>
          <a href="" className='profile__edit'>
          edit
          </a>
        </div>
        <div className="search__filter">
          <Filter filters={fiters}/>
        </div>
        <Post nikname={'nikitaka'} username={'nikitaka21221'} imageavatr={'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png'} bodytext={'hello bro'} img={'https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9ufGVufDB8fDB8fHww&w=1000&q=80'}/>
        <Post nikname={'nikitaka'} username={'nikitaka21221'} imageavatr={'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png'} bodytext={'hello bro'} img={'https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9ufGVufDB8fDB8fHww&w=1000&q=80'}/>
        <Post nikname={'nikitaka'} username={'nikitaka21221'} imageavatr={'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png'} bodytext={'hello bro'} img={'https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9ufGVufDB8fDB8fHww&w=1000&q=80'}/>
        <Post nikname={'nikitaka'} username={'nikitaka21221'} imageavatr={'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png'} bodytext={'hello bro'} img={'https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9ufGVufDB8fDB8fHww&w=1000&q=80'}/>
       </div>
    </div>
  );
};

export default page;