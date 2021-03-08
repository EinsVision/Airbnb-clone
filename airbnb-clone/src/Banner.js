import { Button } from '@material-ui/core';
import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <div className='banner'>
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
