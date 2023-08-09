"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const NavHeader = () => {

  const [profileClick,setProfileClick]=useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setProfileClick(false)
    },6000)
  },[profileClick==true])
  return (
   <><div>
          <input
              type="text"
              placeholder="Search" />
      </div></>
 
  );
}

export default NavHeader;
