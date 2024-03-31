'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { AdData } from '@/app/libs/AdsDummyData';
import card from './card.module.scss'
import Image from 'next/image';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const SwiperComp = () => {
  return (
   <div style={{maxWidth:"1200px", margin:'auto'}} className='pt-20'>
    <h1 className={`${card.heading} pb-5`}>Recent Ads</h1>
     <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {
        AdData.map((item)=>(
            <SwiperSlide>
              <Card title={item.title} price={item.price} location={item.location}
                 ago={item.ago}
                 tag={item.tag}
                 image={item.image} 
                />
            </SwiperSlide>
        ))
      }
      
    
    </Swiper>
   </div>
  )
}


const Card = ({title,tag,price,location,ago,image}:any) => {
    return (
      <div className={`${card.main} w-[90%] flex flex-col items-center relative h-[20%]`}>
        {tag && <div className={`${card.tag}`}>Featured</div>}
         <Image src={image} alt='ad image' className='w-full h-64' width={100} height={50} />
         <div className={`${card.textSection} flex flex-col w-full px-2 py-2 gap-2`}>
          <div className='flex justify-between items-center'>
          <span className={`${card.price}`}>Rs.{price}</span>
           <FavoriteBorderIcon />
          </div>
          <span className={`${card.title}`}>{title}</span>
          <span className={`${card.location}`}>{location}</span>
          <span className={`${card.ago}`}>{ago}</span>
         </div>
      </div>
    )
  }

export default SwiperComp