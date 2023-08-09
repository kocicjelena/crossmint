import MapType from "./MapType";

 export interface IState {
  map:MapType |any
  }
  export interface IContextState {
    map:MapType |any
  }

  export interface IContextAction {
    findGoalMap: () => void;
    testGoalMap: (data:string) => void;
  }
  
  export interface IContext {
    state: IContextState;
    actions: IContextAction;
  }
  export interface MapAction {
    type: string;
    payload?: {
      gmap?: any[] | null;
      error?: any | null;
      res?: any;
      test?: any[] | null;
    };
  }
 