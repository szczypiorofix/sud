import React, { useState, useEffect } from 'react';
import {SplashScreenProps} from "./SplashScreen.Model";

import './SplashScreen.scss';
import {APP_VERSION} from "../../shared/AppSettings";


export const SplashScreen: React.FC<SplashScreenProps>  = ( props: SplashScreenProps ) => {


    const switchToMainMenuTimeOut = () => {
        props.switchToMainMenu();
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
