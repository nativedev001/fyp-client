'use client'
import React from 'react'
import category from './category.module.scss';
import Image from 'next/image';
import { CategoryDummyData } from '@/app/libs/categoryData';

const Category = () => {
  return (
    <div className={`${category.main}`}>
      <h3 className={`${category.heading} mt-10`}>All Categories</h3>
      <div className={`${category.categoryRow} flex flex-row flex-wrap gap-16 items-center mt-10`}>
       {
        CategoryDummyData.map((item)=>(
            <div key={item.id} className={`${category.categoryCard} flex flex-col items-center justify-center cursor-pointer`}>
            <Image src={`${item.path}`} alt='category_image' width={100} height={100} />
            <span className={`${category.title} mt-2`}>{item.title}</span>
          </div>
        ))
       }
      </div>
    </div>
  )
}

export default Category