import React, { FC, TextareaHTMLAttributes } from 'react';

interface textarea extends React.TextareaHTMLAttributes<HTMLTextAreaElement>{
  chidren:  React.ReactNode;
}

const Textarea:FC<textarea> = ({chidren, ...props}) => {
  return (
    <textarea className='input'{...props}>{chidren}</textarea>
  );
};

export default Textarea;