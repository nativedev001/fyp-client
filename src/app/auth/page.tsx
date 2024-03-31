'use client';

import React, { useState } from 'react'
import auth from './auth.module.scss';
import axios from 'axios';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';


const Auth = () => {

  const router = useRouter();

  const token = sessionStorage.getItem('token');
  if(token){
    redirect('/profile')
  }

  const [state, setState] = useState(true);
  const [userData, setUserData] = useState({
    name:"",
    email:"",
    phone:"",
    password:""
  })

  const handleUserData=(e:any)=>{
    setUserData({...userData,[e.target.name]:e.target.value})
  }

  const handleRegister=async(e:any)=>{
    e.preventDefault();
    try{
 const response = await axios.post('http://localhost:8000/api/users/auth/register',userData)
 console.log("this is response", response);

    }catch(err){
 console.error("error while register", err)
    }
  }

  const handleLogin=async(e:any)=>{
    e.preventDefault();
   try{
    const response = await axios.post('http://localhost:8000/api/users/auth/login',{
      email:userData.email,
      password:userData.password,
    })
    const token = response.data.token;
    console.log('Login successful. Token:', token);
    getUserData(token);
    router.push('/')
   }catch(err){
     console.log('error occur while login')
   }
  }

  const getUserData = async (token:any) => {
    try {
      const profileResponse = await axios.post('http://localhost:8000/api/users/profile', {}, {
        headers: {
          Authorization: `JWT ${token}`,
        },
      });
      const userData = profileResponse.data;
      sessionStorage.setItem('token', token);
      console.log('User Data:', userData);
    } catch (error:any) {
      console.error('Error getting user data:', error.response ? error.response.data : error.message);
      
    }
  };



  const handleState=()=>{
    setState(!state)
  }


  return (
    <div className='w-full h-screen flex justify-center items-center bg-slate-200'>
   <div className={`${state ? auth.box : auth.box_register} flex-col`}>
<span className={`${auth.heading}`}>{state  ? 'Login' : 'Register'}</span>
<form>
{
  !state && 
  <div className={`flex justify-start flex-col ${auth.inputContainer}`}>
<span>UserName</span>
<input type='text'  name='name' value={userData.name} onChange={handleUserData}  required />
</div>
}
<div className={`flex justify-start flex-col ${auth.inputContainer}`}>
<span>Email</span>
<input type='email'  name='email' value={userData.email} required onChange={handleUserData} />
</div>
{
  !state && (
    <div className={`flex justify-start flex-col ${auth.inputContainer}`}>
<span>Phone</span>
<input type='text'  name='phone' value={userData.phone} required onChange={handleUserData} />
</div>
  )
}
<div className={`flex justify-start flex-col ${auth.inputContainer}`}>
<span>Password</span>
<input type='text' value={userData.password}  name='password'  required onChange={handleUserData} />
</div>
<div className={`flex justify-center items-center  ${state ? 'mt-8 mb-4' : ' mt-3 mb-2'}`}>
<button  className={`${auth.login}`} onClick={state? handleLogin : handleRegister}>{state ? 'Login' : 'Register'}</button>
</div>

<span className={`${auth.textBottom} text-center cursor-pointer`} onClick={handleState}>{state ? "Don't have account ?" : "Have account Login here" }</span>
</form>


   </div>
    </div>
  )
}

export default Auth