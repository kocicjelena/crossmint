import { useContext, useEffect, useState } from "react";
import { useContextActions, useContextState } from "../../context/GlobalContext";
import getGoalMap from "../../libs/mapAPI";
import { postPolyanets } from "../../libs/postAPI";


const MakeMetaverseI = () => {

    const firstTaskGoalMap=async()=>{
        let check = []
        const l = 11
        const half = Math.floor(l)
        console.log('half',half)
        for (let i=2;i<l-2;i++){
             let data = {row:i,column:i}
             await postPolyanets(data) 
             let data_next = {row:i,column:l-i-1}
             await postPolyanets(data_next) 
      }
    }

    const firstTaskGoalMapFromAPI=async()=>{
      const goal = await getGoalMap() as any
      for (let i=0;i<goal.length;i++){
        for (let g=0;g<goal[i].length;g++){
            if (goal[i][g] === 'POLYANET'){ 
              let data = {row:i,column:g}
              await postPolyanets(data) 
            continue
            }
        }
    }
  }

  
    return (
          <>  
            <br /> 
            <button type="submit" onClick={firstTaskGoalMap}>First task: Make goal map I (calculations)</button>
            <br />
            <button type="submit" onClick={firstTaskGoalMapFromAPI}>First task: Make goal map using Goal Map API (comaprison))</button>
            <br />
        </> 
    )
  }
  export default MakeMetaverseI