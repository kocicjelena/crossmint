import { useContext, useEffect, useState } from "react";
import MakeMetaverseStart from "./MakeMetaverseStart";
import MakeMetaverseI from "./MakeMetaverseI";
import MakeMetaverseII from "./MakeMetaverseII";


const MakeMetaverse = () => {
    
    return (
          <>
          <br />
          Using Goal Map Megaverse API
          <MakeMetaverseStart />

          <br />
          TASK I
          <MakeMetaverseI />
          <br />
          TASK II
          <MakeMetaverseII />
          <br />
       </> 
    )
  }
  export default MakeMetaverse