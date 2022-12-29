import React, {useRef, useState} from "react";
import {MenuList} from "./MenuList";
import {IMainMenuItem, IMainMenuState, MAIN_MENU_LIST_ITEMS} from "./MainMenu.Model";
import {Inputs} from "../../core/Inputs";

import './MainMenu.scss';
import {IKeyProps, KEY} from "../../core/Inputs.Model";


export const MainMenu: React.FC  = () => {


    const defaultMenu: IMainMenuItem[] =
        [
            {
                title: "NOWA GRA",
                menuItem: MAIN_MENU_LIST_ITEMS.NEW_GAME
            },
            {
                title: 'OPCJE',
                menuItem: MAIN_MENU_LIST_ITEMS.OPTIONS
            },
            {
                title: 'NAJLEPSZE WYNIKI',
                menuItem: MAIN_MENU_LIST_ITEMS.BEST_SCORES
            },
            {
                title: 'POMOC',
                menuItem: MAIN_MENU_LIST_ITEMS.HELP
            },
            {
                title: "WYJDŹ",
                menuItem: MAIN_MENU_LIST_ITEMS.QUIT
            }
        ];

    const [ state, setState ] = useState<IMainMenuState>({
        selectedMenuPosition: MAIN_MENU_LIST_ITEMS.NEW_GAME,
        list: defaultMenu
    });

    const stateRef = useRef<IMainMenuState>();
    stateRef.current = state;

    // const { appState, setAppState } = useGlobalContext();

    const onKeyDown = ( key: KEY ) => {
        const curState = stateRef.current;
        if ( curState ) {
            switch( key ) {
                case KEY.KEY_DOWN:
                    const posDown = curState.selectedMenuPosition < curState.list.length - 1 ? curState.selectedMenuPosition + 1 : 0;
                    setState({
                        ...curState,
                        selectedMenuPosition: posDown
                    });
                    break;

                case KEY.KEY_UP:
                    const posUp = curState.selectedMenuPosition > 0 ? curState.selectedMenuPosition - 1 : curState.list.length - 1;
                    setState({
                        ...curState,
                        selectedMenuPosition: posUp
                    });
                    break;

                case KEY.KEY_ENTER:
                case KEY.KEY_SPACE:
                    chosenListItem( curState.selectedMenuPosition );
                    break;
                default:
                    break;
            }
        }
    }


    const chosenListItem = ( pos: number ) => {
        console.log('Chosen element: ' + pos );
    }

    console.log('[render]: MainMenu ');

    return <div className="main-menu-container">
        <div className="title">
            <h2>Single User Dungeon</h2>
        </div>
        <div className="main-menu">
            <Inputs
                allowSpecialKeys={ true }
                setKeys={ ( keys: IKeyProps[] ) => {
                    keys.forEach( item => {
                        item.press = () => onKeyDown( item.code );
                    });
                } }
            >
                <MenuList
                    list={ state.list }
                    selectedItem={ state.selectedMenuPosition }
                />
            </Inputs>
        </div>
    </div>
}
