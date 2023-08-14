import React from 'react';
import Post from '../component/Post/Post';
import MiniProfile from '../component/MiniProfile/MiniProfile';


const page = () => {
  return (
    <>
      <div className="archive">
        <div className="archive__post"></div>
      </div>
      <MiniProfile/>
    </>
    
  );
};

export default page;