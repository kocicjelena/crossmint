import { useContext, useEffect, useState } from "react";
import React from "react";
import DrowMap from "../Utils/DrowMap";
import result from "../../utils/startMap";

const Polyanets = () => {

    const [picMap,setPicMap]=useState([]);
    
    const drow=async()=>{
    const l = 11
    const half = Math.floor(l)
    const temp =result(l)
   
    for (let i=2;i<l-2;i++){
         temp[i].splice(i,1,'POLYANET')
         temp[i].splice(l-i-1,1,'POLYANET')
      }
    setPicMap(temp)
    }
   
    return (
          <>      
          <button type="submit" onClick={drow}>drow I map by calculation</button>
          {!!picMap&&picMap.length >1 && (<DrowMap map={picMap}/>)}
         </>
    )
  }
  export default Polyanets;
