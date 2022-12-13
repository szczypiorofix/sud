import { IKeyPropsList} from "../../core/Inputs.Model";

export interface IMainMenuProps {

}

export interface IMainMenuItem {
    title: string;
    selected: boolean;
}


export interface IMainMenuState {
    menu: IMainMenuItem[];
    keys: IKeyPropsList;
}



export interface IMenuListProps {
    list: IMainMenuItem[];
}


