import React, {useContext} from "react";
import {STAGE} from "../App.model";


export interface IMainAppContext {
    stage: STAGE;
    name: string;
    setMainAppContext: () => void;
}

export type GlobalContent = {
    stage: STAGE;
    setStage:( stage: STAGE ) => void
}

export const DEFAULT_STAGE = STAGE.SPLASH;


const MainAppContext = React.createContext<GlobalContent>(
    {
        stage: STAGE.SPLASH,
        setStage: () => {}
    }
);

export const useGlobalContext = () => useContext(MainAppContext)

export default MainAppContext;
