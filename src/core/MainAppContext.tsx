import React, {useContext} from "react";
import {STAGE} from "../App.model";
import {APP_SETTINGS_REDUCER_ACTION_TYPE} from "./AppStageReducer";


export interface IMainAppState {
    stage: STAGE;
    playerName: string;
}

export type GlobalContent = {
    appState: IMainAppState;
    setAppState:( state: IMainAppState, type: APP_SETTINGS_REDUCER_ACTION_TYPE ) => void
}

export const DEFAULT_APP_STATE: IMainAppState = {
    stage: STAGE.SPLASH,
    playerName: "Todd Howard"
};


const MainAppContext = React.createContext<GlobalContent>(
    {
        appState: DEFAULT_APP_STATE,
        setAppState: () => {}
    }
);

export const useGlobalContext = () => useContext(MainAppContext)

export default MainAppContext;
