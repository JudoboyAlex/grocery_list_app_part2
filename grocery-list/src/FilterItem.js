import React, {useRef} from 'react';

const FilterItem = ({ filter, id, onClick }) => {
  const { name, value } = filter;

  // const filterRef = useRef();


  const handleClick = (e) => {
    e.preventDefault();
    console.log('The link was clicked.');
    // filterRef.current.value = checked
   


  }

  return (
    <li>
      <input type="radio" name="category" value={ value } id={ id }   />
      <label onClick = {handleClick} htmlFor={id}>  { name } </label>
    </li>
  );
};

export default FilterItem;


// onClick = {filterGrocery}
// htmlFor="filter0"