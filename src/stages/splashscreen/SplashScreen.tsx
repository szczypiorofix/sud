import React, { useEffect } from 'react';

import {APP_VERSION} from "../../shared/AppSettings";
import {useGlobalContext} from "../../core/MainAppContext";
import {STAGE} from "../../App.model";

import './SplashScreen.scss';


export const SplashScreen: React.FC  = () => {

    const { stage, setStage } = useGlobalContext();

    const switchToMainMenuTimeOut = () => {
        setStage( STAGE.MAIN_MENU  );
    }

    useEffect(() => {
        setTimeout(  switchToMainMenuTimeOut, 1000 );
    }, [] );

    // console.log('[render]: SplashScreen');

    return <div className="splash-screen-container">
        <div className="title">
            <h1>Single User Dungeon</h1>
        </div>
        <div className="version">
            <span>ver. { APP_VERSION }</span>
        </div>
    </div>
}
