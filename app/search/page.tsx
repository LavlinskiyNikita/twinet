'use client'
import React, { useState } from 'react';
import Input from '../component/Input/Input';
import Button from '../component/UI/button/Button';
import Post from '../component/Post/Post';
import User from '../component/User/User';
import MiniProfile from '../component/MiniProfile/MiniProfile';
import Filter from '../component/filter/filter';


const page = () => {
  const [fiters, setFilters] = useState([
    {id: 1, title: "all", name: "all",},
    {id: 2, title: "post", name: "post",},
    {id: 1241, title: "account", name: "account",},
    {id: 11342671347, title: "hashtag", name: "hashtag",}
  ])

  return (
    <>
      <div className="search">
        <div className="search__top-bar">
          <form className="search__bar">
            <Input placeholder='search'/>
            <Button>search</Button>
          </form>
        </div>
        <div className="search__botton">
          <div className="search__filter">
            <Filter filters={fiters}/>
          </div>
          <div className="search__user">
            <User/>
          </div>
          <div className="search__post">
          </div>
        </div>
      </div>
      <MiniProfile/>
    </>
  );
};

export default page;