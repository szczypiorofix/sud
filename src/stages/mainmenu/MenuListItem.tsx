import React from "react";
import {IMainMenuItem} from "./MainMenu.Model";

import './MainMenu.scss';


export const MenuListItem: React.FC<IMainMenuItem> = ( props: IMainMenuItem ) => {

    const firstLetter = props.title.slice(0, 1);
    const restOfLetters = props.title.slice(1);

    return <li className="list-item">
        <span className="select-title">({firstLetter}){restOfLetters}</span>
    </li>

}

