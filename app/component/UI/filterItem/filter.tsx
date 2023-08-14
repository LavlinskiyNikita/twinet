import React, { FC } from 'react';

interface IitemFilter {
  title: string;
}

const filter: FC<IitemFilter> = ({title}) => {
  return (
    <div className="filter__item">
      <p className="filter__title">{title}</p>
    </div>
  );
};

export default filter;