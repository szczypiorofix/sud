import React from "react";
import {STAGE} from "../App.model";


export interface IMainAppContext {
    stage: STAGE;
    name: string;
}

export const MainAppContext = React.createContext<IMainAppContext>({
    stage: STAGE.SPLASH,
    name: ''
});
