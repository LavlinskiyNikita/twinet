import React from 'react';

const MiniProfile = () => {
  return (
    <div className="mini-profile">
      <a href='./profile' className="mini-profile__avatar">
        <img src="" width={54} height={54} alt="" className='mini-profile__img'/>
        <p className="mini-profile__name">user</p>
      </a>
      <div className="mini-profile__body">
        <div className="mini-profile__description">
          <div className="mini-profile__text">my profile😎</div>
        </div>
        <div className="mini-profile__follower">
          <a href='./' className="mini-profile__item">
            <p className="mini-profile__follow-text">followers</p>
            <p className="mini-profile__follow-count">0</p>
          </a>
          <a href='./' className="mini-profile__item">
            <p className="mini-profile__follow-text">post</p>
            <p className="mini-profile__follow-count">0</p>
          </a>
          <a href='./' className="mini-profile__item">
            <p className="mini-profile__follow-text">following</p>
            <p className="mini-profile__follow-count">0</p>
          </a>
        </div>
      </div>
      <div className="mini-profile__button-edit">
        <a href="./setting" className='mini-profile__edit'>
          edit
        </a>
      </div>
    </div>
  );
};

export default MiniProfile;