import React from 'react';
import page from './page.module.scss';
import SliderMain from './components/SliderMain';
import Menu from './components/Menu';
import Category from './components/Category';
import FeaturedAd from './components/FeaturedAd';
import SwiperComp from './components/SwiperComp';

const  Home=()=>{
  return (
  <div className={`${page.conatainer}`}>
    <Menu />
    <SliderMain />
    <Category />
    <FeaturedAd />
    <SwiperComp />
  </div>
  )
}

export default Home
