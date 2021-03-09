import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import './Banner.css';
import Search from './Search';

function Banner() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className='banner'>
      <div className="banner__search">
        {showSearch && <Search />}
        <Button
          className='banner__searchButton' 
          variant='outlined'
          onClick={ () => setShowSearch(!showSearch)}
        >
          {showSearch ? "Hide" : "Search Date"}
        </Button>
      </div>

      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of get away to uncover the hidden gems near you.
        </h5>
        <Button variant='outlined'>Explore nearby</Button>
      </div>
    </div>
  )
}

export default Banner
