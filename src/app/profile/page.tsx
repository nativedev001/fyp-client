'use client'
import React, { useState, useEffect } from "react";
import style from "./profile.module.scss";
import Image from "next/image";
import profileImage from "@/app/assets/cat.png";
import Card from "../components/Card";
import { jwtDecode } from "jwt-decode";
import { redirect, useRouter } from "next/navigation";


const Profile = () => {

    const router = useRouter();
    const [email, setEmail] = useState('');
    const [fullname, setfullname] = useState('');
    

    // const token = sessionStorage.getItem('token');
    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (token) {
          const decodeToken:any = jwtDecode(token);
          
          setEmail(decodeToken.email);
          setfullname(decodeToken.fullName);
          console.log("decoded information", email, fullname);
        }
      }, []);

     const handleLogout=()=>{
        sessionStorage.removeItem('token')
        router.push('/')
     }

  return (
    <div className={`${style.mainbox} mt-16 mb-10`}>
      <div className="w-[60%] mx-auto flex flex-col">
        <div className="flex flex-row gap-5 items-center justify-between px-5 py-2 border border-black-100 ">
          <div className="flex flex-row items-center gap-4">
            <Image src={profileImage} alt="profileiamge" />
            <div className="flex flex-col">
              <span>{fullname}</span>
              <span>{email}</span>
            </div>
          </div>
          <div className="">
            <button className="bg-purple-700 py-2 px-5 text-white" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
        <div className="flex flex-col mt-5">
          <h1 className="text-2xl text-black text-center">Your Ads</h1>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Profile;
