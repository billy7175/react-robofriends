import React from 'react';

const SearchBox = ({ searchfield, onChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={onChange}
        value={searchfield}
      />
    </div>
  );
}

export default SearchBox;