"use client";
import React, { useEffect, useState } from "react";
import ad from "./ad.module.scss";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import axios from "axios";


import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import { redirect } from "next/navigation";
import { jwtDecode } from "jwt-decode";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const Adpost = () => {

  const token = sessionStorage.getItem('token');
  if(!token){
    redirect('/auth');
  }

 const [userId, setUserId] = useState('')

 useEffect(()=>{
  if (token) {
    const decodeToken:any = jwtDecode(token);
    
   setUserId(decodeToken._id);
   console.log("here is userid", decodeToken._id)
  }
 },[token])


 
  const [userData, setUserData] = useState({
    title: "",
    category: "",
    subcategory: "",
    price: "",
    desc: "",
    address: "",
    name: "",
    phone: "",
    
  });

const handleChange=(e:any)=>{
  setUserData({...userData, [e.target.name]: e.target.value})
}
const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
const handleSelectFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
  const files = e.target.files;
  setSelectedFiles(files);
};





// const submitForm = async (e: any) => {
//   e.preventDefault();
//   try {
//     const requestData = {
//       title: userData.title,
//       category: userData.category,
//       subcategory: userData.subcategory,
//       price: userData.price,
//       images: selectedFiles, 
//       desc: userData.desc,
//       address: userData.address,
//       name: userData.name,
//       phone: userData.phone,
//       featured: 0,
//       approve: 0, 

//     };

//     console.log("ad data", requestData)

//     const response = await axios.post('http://localhost:8000/api/forms/form', requestData);

//     console.log(response.data);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };



const submitForm = async (e: any) => {
  e.preventDefault();
  try {
    const formData = new FormData();

    formData.append('title', userData.title);
    formData.append('category', userData.category);
    formData.append('subcategory', userData.subcategory);
    formData.append('price', userData.price);
    formData.append('desc', userData.desc);
    formData.append('address', userData.address);
    formData.append('name', userData.name);
    formData.append('phone', userData.phone);
    formData.append('featured', '0');
    formData.append('approve', '0');
    formData.append('userId', userId);
    formData.append('images', selectedFiles[0]);  // Assuming selectedFiles is an array with the File object

    console.log("ad data", formData);

    const response = await axios.post('http://localhost:8000/api/forms/form', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log(response.data);
    redirect('/adpost')
  } catch (error) {
    console.error('Error:', error);
  }
};




  const removeImage = (index: number) => {
    if (selectedFiles) {
      const filesArray = Array.from(selectedFiles);
      filesArray.splice(index, 1);
      const newFileList = new DataTransfer();
      filesArray.forEach((file) => newFileList.items.add(file));
      setSelectedFiles(newFileList.files);
    }
  };

  return (
    <div className={`${ad.main}`}>
      <div
        className={`${ad.mainContainer} flex flex-col 2xl:w-3/4 mx-auto mt-10`}
      >
        <form>
          <div className={`${ad.inpuwrapper} flex flex-col items-start w-full`}>
            <label className={`${ad.label} mb-1`}>Enter title</label>
            <input type="text" name="title" className={`${ad.input} w-full`} onChange={handleChange} value={userData.title} />
          </div>
          <div
            className={`${ad.inpuwrapper} flex flex-row w-full gap-x-10 mt-[20px]`}
          >
            <div
            className={`${ad.inpuwrapper} flex flex-col items-start w-full mt-[20px]`}
          >
            <label className={`${ad.label} mb-1`}>Enter Category</label>
            <input type="text" name="category" className={`${ad.input} w-full`} onChange={handleChange} value={userData.category} />
          </div>
          <div
            className={`${ad.inpuwrapper} flex flex-col items-start w-full mt-[20px]`}
          >
            <label className={`${ad.label} mb-1`}>Enter SubCategory</label>
            <input type="text" name="subcategory" className={`${ad.input} w-full`} onChange={handleChange} value={userData.subcategory} />
          </div>
          </div>
          <div
            className={`${ad.inpuwrapper} flex flex-col items-start w-full mt-[20px]`}
          >
            <label className={`${ad.label} mb-1`}>Enter Price</label>
            <input type="text" name="price" className={`${ad.input} w-full`}  onChange={handleChange} value={userData.price}/>
          </div>
          <div className="flex justify-center items-center mt-5">
            <div className="flex flex-col w-full md:w-2/3 lg:w-1/3">
              <input
                type="file"
                multiple
                onChange={handleSelectFiles}
                className="hidden"
                id="file"
               
              />
              <label
                htmlFor="file"
                className={`w-full py-2 text-center cursor-pointer border border-gray-400 rounded-lg hover:bg-gray-50`}
              >
                <PhotoSizeSelectActualIcon />
                &nbsp; Select Image(s)
              </label>
              {selectedFiles && (
                <div className="flex flex-wrap mt-4">
                  {Array.from(selectedFiles).map((file, index) => (
                    <div
                      key={index}
                      className="flex flex-wrap items-center mr-2 mb-2"
                    >
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`Selected Image ${index}`}
                        className="w-32 h-32 object-cover border rounded-md"
                      />
                      <IconButton onClick={() => removeImage(index)}>
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div
            className={`${ad.inpuwrapper} flex flex-col items-start w-full mt-[20px]`}
          >
            <label className={`${ad.label} mb-1`}>Enter Description</label>
            <textarea rows={4} name="desc" className={`${ad.input} w-full`}  onChange={handleChange} value={userData.desc}/>
          </div>
          <div
            className={`${ad.inpuwrapper} flex flex-col items-start w-full mt-[20px]`}
          >
            <label className={`${ad.label} mb-1`}>Enter Address</label>
            <input type="text" name="address" className={`${ad.input} w-full`} onChange={handleChange} value={userData.address} />
          </div>
          <div
            className={`${ad.inpuwrapper} flex flex-col items-start w-full mt-[20px]`}
          >
            <label className={`${ad.label} mb-1`}>
              Enter Name <sub>(Show on ad)</sub>
            </label>
            <input type="text" name="name" className={`${ad.input} w-full`}  onChange={handleChange} value={userData.name}/>
          </div>
          <div
            className={`${ad.inpuwrapper} flex flex-col items-start w-full mt-[20px]`}
          >
            <label className={`${ad.label} mb-1`}>
              Enter Phone Number <sub>(Show on ad)</sub>
            </label>
            <input type="text" name="phone" className={`${ad.input} w-full`}  onChange={handleChange} value={userData.phone}/>
          </div>
          <button className="w-full bg-blue-950 py-4 rounded-lg text-white mt-10" onClick={submitForm}>
            Submit Ad
          </button>
        </form>
      </div>
    </div>
  );
};

export default Adpost;
