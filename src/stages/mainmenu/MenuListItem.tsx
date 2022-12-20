import React from "react";
import {IMenuListItemProps} from "./MainMenu.Model";

import './MainMenu.scss';


export const MenuListItem: React.FC<IMenuListItemProps> = ( props: IMenuListItemProps ) => {

    // const firstLetter = props.title.slice(0, 1);
    // const restOfLetters = props.title.slice(1);

    return <li className="list-item">
        {/*<span className="select-title">({firstLetter}){restOfLetters}</span>*/}
        <span className="select-indicator">{ props.selected ? '>' : '' }</span>
        <span className="select-title">{ props.title }</span>
    </li>

}

