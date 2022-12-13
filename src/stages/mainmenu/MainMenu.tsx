import React, {useContext, useState} from "react";

import './MainMenu.scss';
import {MenuList} from "./MenuList";
import {IMainMenuProps, IMainMenuState} from "./MainMenu.Model";
import {DEFAULT_KEYS, IKeyProps} from "../../core/Inputs.Model";
import {Inputs} from "../../core/Inputs";
import {IMainAppContext, MainAppContext} from "../../core/MainAppContext";



export const MainMenu: React.FC<IMainMenuProps>  = ( props: IMainMenuProps ) => {

    const mainAppContext = useContext<IMainAppContext>( MainAppContext );

    console.log("MainAppContext: nane:  " + mainAppContext.name);

    const [state, setState] = useState<IMainMenuState>({
       menu: [
           {
               title: "NEW GAME",
               selected: true
           },
           {
               title: 'OPTIONS',
               selected: false
           },
           {
               title: "QUIT",
               selected: false
           }
       ],
        keys: DEFAULT_KEYS
    });

    const onKeyPressed = ( keyProps: IKeyProps ) => {
        console.log("Key pressed: " + keyProps.code );
        if ( state.keys[ keyProps.code ] ) {
            setState({
                ...state,
                keys: {
                    ...state.keys,
                    [keyProps.code]: {
                        pressed: true,
                        up: false,
                        down: false,
                        code: keyProps.code
                    }
                }
            })
        }
    }

    console.log('[render]: MainMenu');

    return <div className="main-menu-container">
        <div className="title">
            <h2>Single User Dungeon</h2>
        </div>
        <div className="main-menu">
            <Inputs
                onKeyDown={ () => {} }
                onKeyUp={ () => {} }
                onKeyPressed={ onKeyPressed }
            >
                <MenuList
                    list={ state.menu }
                />
            </Inputs>
        </div>
    </div>
}
