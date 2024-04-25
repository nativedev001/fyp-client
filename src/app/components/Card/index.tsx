import React from 'react'
import card from './card.module.scss';
import Image from 'next/image';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import feturedImage from '@/app/assets/download.jpg';
import Link from 'next/link';

const Card = ({title,tag,price,location,ago,image, href}:any) => {
  return (
    <Link href={href}>
    <div className={`${card.main} w-full flex flex-col items-center relative`}>
      {tag && <div className={`${card.tag}`}>Featured</div>}
       <img src={image} alt='ad image' className={`${card.image} object-contain`} width={100} height={50}  />
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
    </Link>
  )
}

export default Card