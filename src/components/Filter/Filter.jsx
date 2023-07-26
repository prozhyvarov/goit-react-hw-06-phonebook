import React from 'react';
import PropTypes from 'prop-types';
import { FilterCont, Label, Input } from './Filter.styled';
import { getFilter, setFilter } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

function Filter() {

  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  
  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <FilterCont>
      <Label>
        Find contacts by name
        <Input type="text" name={filter} value={filter} onChange={onChange} />
      </Label>
    </FilterCont>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
