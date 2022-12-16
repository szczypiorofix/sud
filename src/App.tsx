import React, {useReducer} from 'react';
import {STAGE} from "./App.model";
import MainAppContext, {DEFAULT_STAGE} from "./core/MainAppContext";
import {SplashScreen} from "./stages/splashscreen/SplashScreen";
import {MainMenu} from "./stages/mainmenu/MainMenu";
import {AppStageReducer, REDUCER_ACTION_TYPE} from "./core/AppStageReducer";

import './App.scss';
import {NewGame} from "./stages/newgame/NewGame";


export const App: React.FC = () => {

    const [ state, dispatch ] = useReducer( AppStageReducer, { stage: STAGE.SPLASH } );

    const stageResolver = () => {
        switch ( state.stage ) {
            case STAGE.MAIN_MENU:
                return <MainMenu />
            case STAGE.NEW_GAME:
                return <NewGame />
            default:
                return <SplashScreen />
        }
    }

    // console.log('[render]: App');

    return <div className='background-container'>
        <MainAppContext.Provider
            value={ {
                stage: DEFAULT_STAGE,
                setStage: ( stage ) => {
                    dispatch( {
                        type: REDUCER_ACTION_TYPE.MOVE_TO_OTHER_STAGE,
                        payload: stage
                    } );
                }
            } }
        >
            { stageResolver() }
        </MainAppContext.Provider>
    </div>

}
