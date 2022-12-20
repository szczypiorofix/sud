import React, {useRef, useState} from "react";
import {MenuList} from "./MenuList";
import {IMainMenuItem, IMainMenuState} from "./MainMenu.Model";
import {Inputs} from "../../core/Inputs";

import './MainMenu.scss';
import {IKeyProps, KEY} from "../../core/Inputs.Model";


export const MainMenu: React.FC  = () => {


    const defaultMenu: IMainMenuItem[] =
        [
            {
                title: "NOWA GRA"
            },
            {
                title: 'OPCJE'
            },
            {
                title: 'POMOC'
            },
            {
                title: 'NAJLEPSZE WYNIKI'
            },
            {
                title: "WYJDŹ"
            }
        ];

    const [ state, setState ] = useState<IMainMenuState>({
        selectedMenuPosition: 0,
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
                    const posDown = curState.selectedMenuPosition < curState.list.length - 1 ? curState.selectedMenuPosition + 1 : curState.selectedMenuPosition = 0;
                    setState({
                        ...curState,
                        selectedMenuPosition: posDown
                    });
                    break;
                case KEY.KEY_UP:
                    const posUp = curState.selectedMenuPosition > 0 ? curState.selectedMenuPosition - 1 : curState.selectedMenuPosition = curState.list.length - 1;
                    setState({
                        ...curState,
                        selectedMenuPosition: posUp
                    });
                    break;
                default:
                    break;
            }
        }
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
                    keys.map( item => {
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
