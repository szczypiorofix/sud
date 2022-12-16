import {STAGE} from "../App.model";

export interface IReducerState {
    stage: STAGE;
}

export enum REDUCER_ACTION_TYPE {
    MOVE_TO_OTHER_STAGE,
}

export interface IReducerAction {
    type: REDUCER_ACTION_TYPE;
    payload: STAGE;
}

export const AppStageReducer = ( prevState: IReducerState , action: IReducerAction ) => {
    const { type, payload } = action;
    switch( type ) {
        case REDUCER_ACTION_TYPE.MOVE_TO_OTHER_STAGE:
            return { ...prevState, stage: prevState.stage = payload };
        default:
            return prevState;
    }
}

