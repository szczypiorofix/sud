import React, {useEffect, useState} from 'react';
import {IAppState, STAGE} from "./App.model";
import {SplashScreen} from "./stages/splashscreen/SplashScreen";
import {MainMenu} from "./stages/mainmenu/MainMenu";

import './App.scss';
import MainAppContext from "./core/MainAppContext";


export const App: React.FC = () => {


    const [ state, setState ] = useState<IAppState>({
        stage: STAGE.SPLASH,
        name: "splash"
    });


    const stageResolver = () => {
        switch( state.stage ) {
            case STAGE.MAIN_MENU:
                return <MainMenu />
            default:
                return <SplashScreen />
        }
    }


    console.log('[render]: App');


    return <div className='background-container'>
        <MainAppContext.Provider
            value={ {
                stage: state.stage,
                setState: (stage: STAGE) => {
                    setState({
                        ...state,
                        stage
                    });
                }
            } }
        >
            { stageResolver() }
        </MainAppContext.Provider>

    </div>

}
