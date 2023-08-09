
import actionTypes from '../interfaces/actionTypes';
import { MapAction } from '../interfaces/ContextType';
import MapType from '../interfaces/MapType';
import result from '../utils/startMap';


const initialMap = {
  //gmap: result(30),
  gmap:[''],
  test:['']
};

const mapReducer = (state:MapType, action:MapAction) => {
    const { type, payload } = action;
  switch (type) {
    
    case actionTypes.MAP_WRITE:
      return {
        ...state,
        gmap: payload?.gmap
      };
 
    case actionTypes.TEST_MAP_WRITE:
      return {
        ...state,
        test: payload?.test
      };  
    default: return state;
  }
};

export { initialMap, mapReducer };

