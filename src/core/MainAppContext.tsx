import React from "react";
import {STAGE} from "../App.model";


export interface IMainAppContext {
    stage: STAGE;
}

export const MainAppContext = React.createContext<IMainAppContext>({
    stage: STAGE.SPLASH
});
