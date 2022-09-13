import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';

const Imgrepresent = () => {
    const matches = useMediaQuery('(max-width:900px)');

  return (
  <img   className={matches?"smallimg":"img_representativa"} src='https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?cs=srgb&dl=pexels-vojtech-okenka-392018.jpg&fm=jpg'/>
  )
}

export default Imgrepresent