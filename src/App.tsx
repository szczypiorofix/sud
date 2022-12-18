import React, {useReducer} from 'react';
import {STAGE} from "./App.model";
import MainAppContext, {IMainAppState} from "./core/MainAppContext";
import {SplashScreen} from "./stages/splashscreen/SplashScreen";
import {MainMenu} from "./stages/mainmenu/MainMenu";
import {APP_SETTINGS_REDUCER_ACTION_TYPE, AppSettingsReducer} from "./core/AppStageReducer";

import './App.scss';
import {NewGame} from "./stages/newgame/NewGame";


export const App: React.FC = () => {

    const [ state, dispatch ] = useReducer( AppSettingsReducer, { stage: STAGE.SPLASH, playerName: 'Todd Howard' } );

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

    console.log('[render]: App');

    return <div className='background-container'>
        <MainAppContext.Provider
            value={ {
                appState: state,
                setAppState: ( _state: IMainAppState, _type: APP_SETTINGS_REDUCER_ACTION_TYPE ) => {
                    dispatch({
                        type: _type,
                        payload: {
                            stage: _state.stage,
                            playerName: _state.playerName
                        }
                    });
                }
            } }
        >
            { stageResolver() }
        </MainAppContext.Provider>
    </div>
}
