import React, {useState} from 'react';
import {IAppState, STAGE} from "./App.model";
import {SplashScreen} from "./stages/splashscreen/SplashScreen";
import {MainMenu} from "./stages/mainmenu/MainMenu";

import './App.scss';
import MainAppContext, {useGlobalContext} from "./core/MainAppContext";
import {NewGame} from "./stages/newgame/NewGame";


export const App: React.FC = () => {

    const { stage, setStage } = useGlobalContext();

    const [ state, setState ] = useState<IAppState>({
        stage: STAGE.SPLASH,
        name: "splash"
    });


    const stageResolver = () => {
        switch( state.stage ) {
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
                stage: state.stage,
                setStage: (stage: STAGE) => {
                    setState({
                        ...state,
                        stage: stage
                    });
                }
            } }
        >
            { stageResolver() }
        </MainAppContext.Provider>

    </div>

}
