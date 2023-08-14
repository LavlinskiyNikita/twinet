import React, { FC } from 'react';
import Input from '../Input/Input';

interface children {
  children: React.ReactNode;
  setModal: any;
}

const Popup:FC<children> = ({children, setModal}) => {
  return (
    <div className="popup" onClick={() => setModal(false)}>
      <div className="popup__content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Popup;