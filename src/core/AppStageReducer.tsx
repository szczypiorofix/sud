import {IMainAppState} from "./MainAppContext";


export enum APP_SETTINGS_REDUCER_ACTION_TYPE {
    MOVE_TO_STAGE,
    CHANGE_PLAYER_NAME
}

export interface IAppSettingsReducerAction {
    type: APP_SETTINGS_REDUCER_ACTION_TYPE;
    payload: IMainAppState;
}

export const AppSettingsReducer = ( prevState: IMainAppState , action: IAppSettingsReducerAction ) => {
    const { type, payload } = action;
    switch( type ) {
        case APP_SETTINGS_REDUCER_ACTION_TYPE.CHANGE_PLAYER_NAME:
            console.log(`Changing player name from ${ prevState.playerName} to ${ payload.playerName}`);
            return { ...prevState, playerName: payload.playerName };
        case APP_SETTINGS_REDUCER_ACTION_TYPE.MOVE_TO_STAGE:
            return { ...prevState, stage: payload.stage };
        default:
            return prevState;
    }
}

