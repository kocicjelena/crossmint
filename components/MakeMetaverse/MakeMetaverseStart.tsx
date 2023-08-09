import { useContext, useEffect, useState } from "react";
import { useContextActions, useContextState } from "../../context/GlobalContext";

import DrowMap from "../Utils/DrowMap";


const MakeMetaverseStart = () => {

    const {
        findGoalMap
    } = useContextActions();

    const state = useContextState();

    const [picMap,setPicMap]=useState([]);

    const drowGoalMap = async() => {
        const firstGoalMap = findGoalMap() as any
        setPicMap(firstGoalMap)
    }

    return (
          <>
            <br />
            <button type="submit" onClick={drowGoalMap}>Get Goal map</button>
            {!!state.map.gmap&&state.map.gmap.length >1 && (<DrowMap map={state.map.gmap}/>)}
            <br />
        </> 
    )
  }
  export default MakeMetaverseStart