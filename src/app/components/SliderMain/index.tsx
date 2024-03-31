import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import Image from 'next/image';
import mainImage from '@/app/assets/slidermain.png';
import slider from './slider.module.scss'
const SliderMain = () => {

  return (
    <div className={`${slider.main} mt-10`}>
    <Image src={mainImage} alt='main ad image' />
    </div>
  )
}

export default SliderMain