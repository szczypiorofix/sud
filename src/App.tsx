import React, {useReducer} from 'react';
import {STAGE} from "./App.model";

import './App.scss';
import MainAppContext, {useGlobalContext} from "./core/MainAppContext";
import {SplashScreen} from "./stages/splashscreen/SplashScreen";


export interface IReducerState {
    stage: STAGE;
}


export enum REDUCER_ACTION_TYPE {
    MOVE_TO_MAIN_MENU,
    MOVE_TO_NEW_GAME
}


export interface IReducerAction {
    type: REDUCER_ACTION_TYPE;
    payload: STAGE;
}


const reducer = (state: IReducerState , action: IReducerAction) => {
    const { type, payload } = action;
    switch( type ) {
        case REDUCER_ACTION_TYPE.MOVE_TO_MAIN_MENU:
            return { ...state, value: state.stage = payload };
        default:
            return state;
    }
}


export const App: React.FC = () => {

    const { stage, setStage } = useGlobalContext();
    const [state, dispatch] = useReducer( reducer, { stage: STAGE.SPLASH } );


    // const [ state, setState ] = useState<IAppState>({
    //     stage: STAGE.SPLASH,
    //     name: "splash"
    // });


    const stageResolver = () => {
        // switch( state.stage ) {
        //     case STAGE.MAIN_MENU:
        //         return <MainMenu />
        //     case STAGE.NEW_GAME:
        //         return <NewGame />
        //     default:
        //         return <SplashScreen />
        // }

        return <SplashScreen />

    }


    console.log('[render]: App');


    return <div className='background-container'>
        <MainAppContext.Provider
            value={ {
                // stage: state.stage,
                // setStage: (stage: STAGE) => {
                //     setState({
                //         ...state,
                //         stage: stage
                //     });
                // }
                stage:STAGE.SPLASH,
                setStage: () => {}
            } }
        >
            { stageResolver() }
        </MainAppContext.Provider>

    </div>

}
