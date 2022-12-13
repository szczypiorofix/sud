import React, {useState} from 'react';
import {IAppState, STAGE} from "./App.model";
import {SplashScreen} from "./stages/splashscreen/SplashScreen";
import {MainMenu} from "./stages/mainmenu/MainMenu";

import './App.scss';
import {MainAppContext} from "./core/MainAppContext";


export const App: React.FC = () => {


    const [ state, setState ] = useState<IAppState>({
        stage: STAGE.SPLASH
    });


    const stageResolver = () => {
        switch( state.stage ) {
            case STAGE.MAIN_MENU:
                return <MainMenu
                />
            default:
                return <SplashScreen
                    switchToMainMenu={ () => setState({...state, stage: STAGE.MAIN_MENU }) }
                />
        }
    }

    console.log('[render]: App');

    return <div className='background-container'>
        <MainAppContext.Provider
            value={ {
                stage: STAGE.SPLASH
            } }
        >
            { stageResolver() }
        </MainAppContext.Provider>

    </div>

}
