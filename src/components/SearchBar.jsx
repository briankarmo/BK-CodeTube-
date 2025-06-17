import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <Paper
      component='form'
      onSubmit={onhandleSubmit}
      sx={{
        borderRadius: 10,
        border: '1px solid #e3e3e3',
        pl: 1,
        pr: 0.5,
        py: 0.2,
        boxShadow: 'none',
        mr: { sm: 5 },
        minHeight: 32,
        height: 32,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <input
        className='search-bar'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ height: 24, fontSize: 15, padding: '0 4px', background: 'transparent' }}
      />
      <IconButton type='submit' sx={{ p: '4px', color: 'red', height: 24, width: 24 }} aria-label='search'>
        <SearchIcon sx={{ fontSize: 20 }} />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;