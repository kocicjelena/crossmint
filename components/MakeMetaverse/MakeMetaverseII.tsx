import { useCallback, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useContextActions, useContextState } from "../../context/GlobalContext";
import getGoalMap from "../../libs/mapAPI";
import result from "../../utils/startMap";
import DrowMap from "../Utils/DrowMap";
import { postComeths, postPolyanets, postSoloons } from "../../libs/postAPI";


const MakeMetaverseII = () => {
    
    const defineGoalMap=async()=>{
       
        const gmap_start = await getGoalMap()
        
        let data
        for (let i=0;i<gmap_start.length;i++){
          for (let g=0;g<gmap_start[i].length;g++){
              switch(gmap_start[i][g]){
                case 'POLYANET':
                  data = {row:i,column:g}
                  await postPolyanets(data)
                  break;
                case 'BLUE_SOLOON':
                    data = {row:i,column:g, color:"blue"}
                    await postSoloons(data)
                    break;
                case 'RED_SOLOON':
                    data = {row:i,column:g, color:"red"}
                    await postSoloons(data)
                    break;
                case 'PURPLE_SOLOON':
                    data = {row:i,column:g, color:"purple"}
                    await postSoloons(data)
                    break;
                case 'WHITE_SOLOON':
                    data = {row:i,column:g, color:"white"}
                    await postSoloons(data)
                    break;
                case 'DOWN_COMETH':
                  data = {row:i,column:g,direction:"down"}
                  await postComeths(data)
                  break;
                case 'UP_COMETH':
                  data = {row:i,column:g,direction:"up"}
                  await postComeths(data)
                  break;
                case 'RIGHT_COMETH':
                  
                  data = {row:i,column:g,direction:"right"}
                  await postComeths(data)
                  break;
                case 'LEFT_COMETH':
                  data = {row:i,column:g,direction:"left"}
                  await postComeths(data)
                  break;
                default:
                  break;
              }
          }
      }
      console.log('end')
        
    }


    return (
          <>
          <br />
            <button type="submit" onClick={defineGoalMap}>Second task: Make goal map II</button>
            <br />
        </> 
    )
  }
  export default MakeMetaverseII