import React, { useEffect } from 'react';

import './SplashScreen.scss';
import {APP_VERSION} from "../../shared/AppSettings";
import {useGlobalContext} from "../../core/MainAppContext";
import {STAGE} from "../../App.model";


export const SplashScreen: React.FC  = () => {

    const { stage, setState } = useGlobalContext();

    const switchToMainMenuTimeOut = () => {
        setState( STAGE.MAIN_MENU  );
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
