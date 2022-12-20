
export interface IMainMenuItem {
    title: string;
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