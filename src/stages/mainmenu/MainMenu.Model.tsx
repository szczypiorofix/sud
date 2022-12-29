
export enum MAIN_MENU_LIST_ITEMS {
    NEW_GAME,
    OPTIONS,
    BEST_SCORES,
    HELP,
    QUIT
}


export interface IMainMenuItem {
    title: string;
    menuItem: MAIN_MENU_LIST_ITEMS;
}


export interface IMenuListProps {
    list: IMainMenuItem[];
    selectedItem: number;
}


export interface IMainMenuState {
    selectedMenuPosition: number;
    list: IMainMenuItem[];
}

export interface IMenuListItemProps {
    title: string;
    selected: boolean;
}