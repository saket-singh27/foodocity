import React from 'react'
import { IMG_LINK } from '../utils/Constants';

const Banner = ({info}) => {
  // const [imageId , action] = info;
  return (
      <>
            <img className='hover:scale-110 h-36 rounded-full px-3' src={IMG_LINK + info.imageId}></img>   
      </>
  )
}

export default Banner