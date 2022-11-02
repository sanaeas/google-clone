import React from 'react';
import './Search.css';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { actionTypes } from "./reducer";

function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    console.log('You hit Enter')

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input
    })

    navigate('/search');
  };

  return (
    <div className='search'>
        <div className="search__input">
            <SearchIcon className="search__input--icon" />
            <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && search(e)} />
            <MicIcon />
        </div>

        {!hideButtons && ( 
        <div className="search__buttons">
            <Button variant="outlined" onClick={search} >Google Search</Button>
            <Button variant="outlined">I'm Feeling Lucky</Button>
        </div> )
        }
        
    </div>
  );
}

export default Search;