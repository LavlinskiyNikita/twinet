import React, { FC } from 'react';

interface button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}


const Button:FC<button> = ({children, ...props}: button) => {
  return (
    <button className='home__btn' {...props}>
      {children}
    </button>
  );
};

export default Button;