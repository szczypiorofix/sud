

export enum STAGE {
    SPLASH,
    MAIN_MENU,
    NEW_GAME,
    GAME
}

export interface IAppState {
    stage: STAGE;
    name: string;
}

