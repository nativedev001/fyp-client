'use client'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import style from './style.module.scss';
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useSearchParams } from 'next/navigation';


interface slides {
    
    id: number;
    url: string;
  }

  interface Image {
    url: string;
  }
  
  interface AdData {
    address: string;
    approve: number;
    category: string;
    desc: string;
    featured: number;
    images: Image[];
    phone: string;
    price: number;
    subcategory: string;
    title: string;
    __v: number;
    _id: string;
  }

const adid = () => {

  const [adData, setAdData] = useState<AdData | null>(null);
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8000/api/forms/form/${id}`)
        .then(response => response.json())
        .then((data: { data: AdData }) => {
          setAdData(data.data); // Set the ad data to the 'data' property of the response
        })
        .catch(error => {
          console.error('Error fetching ad data:', error);
        });
    }
  }, [id]);

  console.log("here is data of my ad", adData);


    const slidesDummydata: slides[] = [
        {
          id: 0,
          url: "/assets/slide1.jpeg",
        
        },
        {
          id: 1,
          url: "/assets/slide2.jpeg",
         
        },
        
      ];
      

    const [currentIndex, setCurrentIndex] = useState(0);
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide
          ? adData && adData.images.length - 1
          : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === adData?.images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    
      useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
    
        return () => clearInterval(interval);
      }, [currentIndex, adData?.images]);
    
      const goToslide = (slideIndex: any) => {
        setCurrentIndex(slideIndex);
      };
    
      const touchStartX = useRef(0);
    
      const handleTouchStart = (e:any) => {
        touchStartX.current = e.touches[0].clientX;
      };
    
      const handleTouchEnd = (e:any) => {
        const touchEndX = e.changedTouches[0].clientX;
        const deltaX = touchEndX - touchStartX.current;
        if (deltaX > 50) {
          prevSlide();
        } else if (deltaX < -50) {
          nextSlide();
        }
      };
    
 
      


  return (
    <div className={`${style.pagestyle} w-[80%] mx-auto mb-10`}>
      <div className='flex flex-row gap-x-10 items-center'>
      <div className={`max-w-[800px] w-full  xl:h-[500px] lg:h-[380px] md:h-[355px] h-[250px] relative sm:mx-auto mx-0 md:px-4 xl:px-0 sm:mt-[122px] mt-[65px]`}
    onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        style={{
          backgroundImage:
          adData?.images[currentIndex]?.url &&
             `url(${adData?.images[currentIndex]?.url})`,
        }}
        className="w-full h-full sm:rounded-2xl bg-center bg-cover duration-1000"
      >
       

        <div
          onClick={prevSlide}
          className="absolute top-[50%] -translate-x-0 rounded-lg t translate-y-[-50%] text-2xl py-5 px-2 left-0 md:left-5 xl:left-0 bg-black/20 text-white cursor-pointer sm:block hidden"
        >
          <KeyboardArrowLeftIcon />
        </div>
        <div
          onClick={nextSlide}
          className="absolute top-[50%] -translate-x-0 rounded-lg t translate-y-[-50%] text-2xl py-5 px-2 right-0 md:right-5 xl:right-0 bg-black/20 text-white cursor-pointer sm:block hidden"
        >
          <KeyboardArrowRightIcon />
        </div>
        <div className="flex justify-center sm:gap-x-2 gap-x-4 absolute sm:bottom-2 bottom-0 mx-auto w-full py-2">
          {slidesDummydata.map((slide: any, slideIndex: React.Key | null | undefined) => (
            <div key={slideIndex} onClick={() => goToslide(slideIndex)}>
              {slideIndex === currentIndex ? (
                <FiberManualRecordIcon className={`${style.active}`} />
              ) : (
                <FiberManualRecordIcon className={`${style.inactive}`} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className='flex flex-col'>

<div className={`flex flex-col items-center ${style.profilecard} w-[200px] py-2 px-2`}>
<Image src={'/assets/cat.png'} width={150} height={150} alt={"profileiamge"} />
<h2>Seller Phone</h2>
<span>{adData?.phone}</span>
</div>
    </div>
      </div>

    <div className={`${style.descbox} w-full flex flex-col mt-10 py-2 px-2`}>
       <h1 className='text-2xl font-medium'>Rs. {adData?.price}</h1>
       <span>title : {adData?.title}</span>
       <span>Category : {adData?.category}</span>
       <span>SubCategory : {adData?.subcategory}</span>
       <span>Address : {adData?.address}</span>

    </div>
    </div>
  )
}

export default adid