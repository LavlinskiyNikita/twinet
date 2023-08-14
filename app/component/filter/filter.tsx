import React, { FC } from 'react';
import Filter from '../UI/filterItem/filter';


interface Filters {
  filters: any[];
}

const filter: FC<Filters> = ({filters}) => {
  return (
    <div className="filter">
     {filters.map(filter => <Filter title={filter.title}/>) } 
    </div>
  );
};

export default filter;