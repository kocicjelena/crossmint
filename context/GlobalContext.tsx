import React, {
    createContext, useContext, ReactNode, useReducer, useMemo,useCallback,
  } from 'react';
import combineReducers from 'react-combine-reducers';
import { initialMap, mapReducer } from '../reducers/MapReducer';
import { useRouter } from 'next/router';
import { IContext, IContextAction, IContextState, IState } from '../interfaces/ContextType';
import actionTypes from '../interfaces/actionTypes';
import getGoalMap from '../libs/mapAPI';
import getGoalTest from '../libs/getGoalTest';
  
 
 
  export interface IAction {
    type: string;
    payload?: any
  }
  
  interface ProviderType {
    children: ReactNode
  }
  

  export interface ContextValue {
    state: IContextState;
    actions: IContextAction;
  }
  
  
  const [mainReducer, initialState] = combineReducers({
    map: [mapReducer, initialMap],
  });
  const initialContext: IContext = {
    state:  initialState,
    actions: {
      findGoalMap: () => undefined,
      testGoalMap: () => undefined,
    },
  };
  

export const Context = createContext<ContextValue>(initialContext);

   export const Provider = ({ children }: ProviderType) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);
    const router = useRouter();
    
      const testGoalMap= useCallback(async (next_api:string) => {
        const res = await getGoalTest(next_api);
        try {
          if (res) {
            const test = res.data
           dispatch({
                type:actionTypes.TEST_MAP_WRITE,
                payload:{test},
              });
            }
          }
         catch (error: Error | any) {
            console.log('error',error)
        }
      },[]);
      const findGoalMap= useCallback(async () => {
        const gmap = await getGoalMap();
        try {
         if (gmap) {
              dispatch({
                type:actionTypes.MAP_WRITE,
                payload:{gmap},
              });
            }
          }
         catch (error: Error | any) {
            console.log('error',error)
        }
      },[]);
    const value = useMemo(
      () => ({
        state,
        actions: {
          findGoalMap,testGoalMap
        },
      }),
      [findGoalMap,testGoalMap,state],
    );
    return (
      <Context.Provider value={value}>
        {children}
      </Context.Provider>
    );
  };
  export const useContextState = () => {
    const { state } = useContext(Context);
    return state;
  };
  export const useContextActions = () => {
    const { actions } = useContext(Context);
    return actions;
  };