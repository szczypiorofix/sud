import React from "react";
import {IMenuListProps} from "./MainMenu.Model";
import {MenuListItem} from "./MenuListItem";


export const MenuList: React.FC<IMenuListProps> = ( props: IMenuListProps ) => {

    return <ul className="menu-list">
        { props
            .list
            .map( (item, index) => <MenuListItem
                key={ index }
                title={ item.title }
                selected={ props.selectedItem === index }
            />)
        }
    </ul>

}

