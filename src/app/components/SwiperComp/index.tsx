'use client'
import React,{useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { AdData } from '@/app/libs/AdsDummyData';
import card from './card.module.scss'
import Image from 'next/image';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import axios from 'axios';


const SwiperComp = () => {

  const [formData, setFormData] = useState([]);

  const fetchformData=()=>{
     axios.get('http://localhost:8000/api/forms/allads').then(response=>{
      const data = response.data;
      console.log("here is data", data)
      setFormData(data);
    }).catch(error=>{
      console.log("error occurd", error)
    });
  }

  useEffect(()=>{
fetchformData();
  },[])

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
        formData.map((item:any)=>(
            <SwiperSlide>
              <Card title={item.title} price={item.price} location={item.address}
                 ago={item.phone}
                 tag={item.tag}
               image={
                item.images[0].url
               }
                href={`/addata/uid?id=${item._id}`}
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