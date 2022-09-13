import ReactStars from 'react-stars'
import React, { useState } from 'react' 

const Stars = ({value, ratingChanged}) => {

  return (
    <ReactStars
  count={5}
  onChange={ratingChanged}
  value={value}
  size={24}
  color2={'#ffd700'} />
  );
}

export default Stars