import { useContext, useEffect, useState } from "react";
import { useContextActions, useContextState } from "../../context/GlobalContext";
import getGoalMap from "../../libs/mapAPI";
import DrowMap from "../Utils/DrowMap";
import result from "../../utils/startMap";

interface Props {
	goal: string[][];
}
const PolyanetsMadeFromGoal = ({goal}:Props) => {


 const [picMap,setPicMap]=useState([]);
  let testMap = result(11);
 
    const drow = async() =>{
      
     
      for (let i=0;i<goal.length;i++){
        for (let g=0;g<goal[i].length;g++){
            if (goal[i][g] === 'POLYANET'){ 
              testMap[i].splice(g,1,'POLYANET')
           
            continue
            }
        }
      }
      setPicMap(testMap)
    }
      
    return (     
          <>
          
          <button type="submit" onClick={drow}>first task made calling Goal Map API</button>
          {!!picMap&&picMap.length >1 && (<DrowMap map={picMap}/>)}
        </>
  
    )
  }
  export default PolyanetsMadeFromGoal;
