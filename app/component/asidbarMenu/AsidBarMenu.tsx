import Image from 'next/image';
import React from 'react';


const AsidBarMenu = () => {
  return (
    <div className="asid-bar-menu">
      <ul className="asid-bar-menu__list">
        <li className="asid-bar-menu__item">
          <a href="./" className="asid-bar-menu__link asid-bar-menu__link--logo">
            <img
            width={55}
            height={55}
              src="./svg_icon/logo.svg"/>
              <span className="asid-bar-menu__text">TWINET</span>
          </a>
        </li>
        <li className="asid-bar-menu__item">
          <a href="./" className="asid-bar-menu__link">
            <img 
            width={40}
            height={40}
              src="./svg_icon/Home.svg"/>
              <span className="asid-bar-menu__text">home</span>
          </a>
        </li>
        <li className="asid-bar-menu__item">
          <a href="./search" className="asid-bar-menu__link">
            <img 
            width={40}
            height={40}
              src="./svg_icon/search-normal.svg"/>
              <span className="asid-bar-menu__text">search</span>
          </a>
        </li>
        <li className="asid-bar-menu__item">
          <a href="./archive" className="asid-bar-menu__link">
            <img 
            width={40}
            height={40}
              src="./svg_icon/archive-add.svg"/>
              <span className="asid-bar-menu__text">archive</span>
          </a>
        </li>
        <li className="asid-bar-menu__item asid-bar-menu__item--user">
          <a href="./profile" className="asid-bar-menu__link">
            <img 
            width={40}
            height={40}
              src=""/>
              <span className="asid-bar-menu__text">name</span>
          </a>
        </li>
        <li className="asid-bar-menu__item asid-bar-menu__item--logout">
          <a href="./" className="asid-bar-menu__link">
            <img 
            width={40}
            height={40}
              src="./svg_icon/logout.svg"/>
              <span className="asid-bar-menu__text">logout</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AsidBarMenu;