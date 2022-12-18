import React, {useEffect} from 'react';

import {APP_VERSION} from "../../shared/AppSettings";
import {useGlobalContext} from "../../core/MainAppContext";
import {STAGE} from "../../App.model";

import './SplashScreen.scss';
import {APP_SETTINGS_REDUCER_ACTION_TYPE} from "../../core/AppStageReducer";


export const SplashScreen: React.FC  = () => {

    const { appState, setAppState } = useGlobalContext();

    const switchToMainMenuTimeOut = () => {
        setAppState( {
            ...appState,
            stage: STAGE.MAIN_MENU
        }, APP_SETTINGS_REDUCER_ACTION_TYPE.MOVE_TO_STAGE );
    }

    useEffect(() => {
        setTimeout(  switchToMainMenuTimeOut, 1000 );
    }, [] );

    console.log('[render]: SplashScreen');

    return <div className="splash-screen-container">
        <div className="title">
            <h1>Single User Dungeon</h1>
        </div>
        <div className="version">
            <span>ver. { APP_VERSION }</span>
        </div>
    </div>
}
