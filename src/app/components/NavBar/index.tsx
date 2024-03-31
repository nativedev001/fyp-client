'use client'
import React from "react";
import navbar from "./navbar.module.scss";
import Image from "next/image";
import Logo from "../../../../public/assets/logo.png";
import Link from "next/link";

const Navbar = () => {

  const token = sessionStorage.getItem('token');
  

  return (
<div className={`${navbar.mainNav} sticky top-0 z-10 bg-white`}>
<div className={`${navbar.navbar} flex justify-between items-center`}>
      <div className={navbar.logo}>
      <Link href={"/"}>
      <Image src={Logo} alt="website+logo" width={100} height={100} />
      </Link>
      </div>
      <div className={`${navbar.searchContainer} flex`}>
       <input type="text" placeholder="Find Dogs, Cats, Birds etc..." />
       <Link className={`${navbar.search}`} href={"/category"}>Search</Link>
      </div>
      <div className={`${navbar.leftbuttons} flex`}>
        {
          token ? 
          <Link href={"/profile"} className={`${navbar.button}`}>Your Account</Link>
          :
          <Link href={"/auth"} className={`${navbar.button}`}>Login</Link>
        }
        <Link href={"/adpost"} className={`${navbar.button}`} >Sell</Link>
      </div>
    </div>
</div>
  );
};

export default Navbar;
