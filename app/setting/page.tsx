'use client'

import React, { useState } from 'react';
import Input from '../component/Input/Input';
import Textarea from '../component/UI/textarea/Textarea';
import Button from '../component/UI/button/Button';

const setting = () => {
  const [lastname, setLastname] = useState ('yuor name');
  const [nikname, setNikname] = useState ('yuor nikname');
  const [description, setDescription] = useState ('yuor descr');

  return (
    <form method='post' className='setting'>
      <div className="setting__user">
        <img  src="https://images.immediate.co.uk/production/volatile/sites/4/2021/08/mountains-7ddde89.jpg?resize=768,574" width={400} className='setting__user-image'/>
        <div className="setting__user-name">
          <Input name='name' value={lastname} onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setLastname(e.target.value)}/>
          <Input name='nikname' value={nikname} onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setNikname(e.target.value)}/>
        </div>
      </div>
      <div className="setting__user-information">
        <Textarea name='name' cols={48} rows={10} value={description} onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setDescription(e.target.value)} chidren={undefined}>{description}</Textarea>
      </div>
      <div className="setting__btn">
        <a href='./'>cencel</a>
        <Button>save</Button>
      </div>
    </form>
  );
};

export default setting;