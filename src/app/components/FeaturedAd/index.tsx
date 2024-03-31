'use client'
import React, { useEffect, useState } from 'react'
import featured from './featured.module.scss';
import Card from '../Card';
import { AdData } from '@/app/libs/AdsDummyData';
import axios from 'axios';
const FeaturedAd = () => {

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
    <div className={`${featured.main} flex flex-wrap gap-5 flex-col pt-20`}>
    <h1 className={`${featured.heading}`}>Featured Ads</h1>
     <div className='flex flex-wrap gap-x-28 gap-y-8'>
        {
            formData?.map((item:any)=>(
                <Card title={item.title} price={item.price} location={item.address}
                 ago={item.phone}
                 tag={item.tag}
                //  image={
                //   item.image && item.image.length > 0 && item.image[0]?.imageData && (
                //     `data:image/jpeg;base64,${Buffer.from(item.image[0].imageData.data).toString('base64')}`
                //   )
                // }
                
                />
            ))
        }
    
    
     </div>
    </div>
  )
}

export default FeaturedAd