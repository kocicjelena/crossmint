import { useCallback, useContext, useEffect, useState } from "react";
import getGoalMap from "../../libs/mapAPI";
import result from "../../utils/startMap";
import DrowMap from "../Utils/DrowMap";
import getGoalTest from "../../libs/getGoalTest";


const TestII = () => {
    const temp =result(30)
    const start_map =result(30)
    const makeGoal = async() => {
        const temp =result(30)
        const gmap_start = await getGoalMap()
        let data
        for (let i=0;i<gmap_start.length;i++){
          for (let g=0;g<gmap_start[i].length;g++){
              switch(gmap_start[i][g]){
                case 'POLYANET':
                  temp[i].splice(g,1,'POLYANET')
                  break;
                case 'BLUE_SOLOON':
                    temp[i].splice(g,1,'BLUE_SOLOON')
                    break;
                case 'RED_SOLOON':
                    temp[i].splice(g,1,'RED_SOLOON')
                    break;
                case 'PURPLE_SOLOON':
                    temp[i].splice(g,1,'PURPLE_SOLOON')
                    break;
                case 'WHITE_SOLOON':
                    temp[i].splice(g,1,'WHITE_SOLOON')
                    break;
                case 'DOWN_COMETH':
                  temp[i].splice(g,1,'DOWN_COMETH')
                  break;
                case 'UP_COMETH':
                  temp[i].splice(g,1,'UP_COMETH')
                  break;
                case 'RIGHT_COMETH':
                  temp[i].splice(g,1,'RIGHT_COMETH')
                  break;
                case 'LEFT_COMETH':
                  temp[i].splice(g,1,'LEFT_COMETH')
                  break;
                default:
                  break;
              }
          }
      }
      console.log('end')
        
    }
    
    const printGoalMap = useCallback(async() => {
      getGoalTest('/api/start')
    },[])
    
    return (
          <>
          <br />
            TESTING task II:
            <br />
            <button type="submit" onClick={printGoalMap}>print starting map (testing)</button>
            <br />
            {!!temp && (<DrowMap map={temp}/>)}
            <br />
            <button type="submit" onClick={makeGoal}>print result (testing)</button>
        </> 
    )
  }
  export default TestII