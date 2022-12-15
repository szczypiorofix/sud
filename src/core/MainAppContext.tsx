import React, {useContext} from "react";
import {STAGE} from "../App.model";


export interface IMainAppContext {
    stage: STAGE;
    name: string;
    setMainAppContext: () => void;
}

export type GlobalContent = {
    stage: STAGE;
    setState:( stage: STAGE ) => void
}



const MainAppContext = React.createContext<GlobalContent>(
    {
        stage: STAGE.SPLASH,
        setState: () => {}
    }
);

export const useGlobalContext = () => useContext(MainAppContext)

export default MainAppContext;
