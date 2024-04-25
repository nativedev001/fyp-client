'use client'
import React,{useState, useEffect} from "react";
import styles from "./style.module.scss";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import axios from "axios";

const Category = () => {

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
    <div className="w-[80%] mx-auto flex flex-row mt-16 mb-10 gap-x-10">
    <Sidebar />
    <div className="w-[100%] flex flex-row flex-wrap">
    {
            formData?.map((item:any)=>(
                <Card title={item.title} price={item.price} location={item.address}
                 ago={item.phone}
                 tag={item.tag}
               image={
                item.images[0].url
               }
                href={`/addata/uid?id=${item._id}`}
                />
            ))
        }
        
    </div>
    </div>
  );
};

export default Category;
