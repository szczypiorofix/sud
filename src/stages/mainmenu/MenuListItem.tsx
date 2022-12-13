import React from "react";
import {IMainMenuItem} from "./MainMenu.Model";

import './MainMenu.scss';


export const MenuListItem: React.FC<IMainMenuItem> = ( props: IMainMenuItem ) => {

    return <li className="list-item">
        <span className="select-indicator">{ props.selected ? '>' : '' }</span>
        <span className="select-title">{ props.title }</span>
    </li>

}

