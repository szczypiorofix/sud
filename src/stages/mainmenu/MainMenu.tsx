import React, {useContext, useEffect, useState} from "react";

import './MainMenu.scss';
import {MenuList} from "./MenuList";
import {IMainMenuProps, IMainMenuState} from "./MainMenu.Model";
import { IKeyProps} from "../../core/Inputs.Model";
import {Inputs} from "../../core/Inputs";




export const MainMenu: React.FC<IMainMenuProps>  = ( props: IMainMenuProps ) => {



    const [state, setState] = useState<IMainMenuState>({
       menu: [
           {
               title: "NOWA GRA",
               selected: true
           },
           {
               title: 'OPCJE',
               selected: false
           },
           {
               title: "WYJDŹ",
               selected: false
           }
       ],
        // keys: DEFAULT_KEYS
    });

    const onKeyPressed = ( keyProps: IKeyProps ) => {
        // console.log("Key pressed: " + keyProps.code );
        // if ( state.keys[ keyProps.code ] ) {
        //     setState({
        //         ...state,
        //         keys: {
        //             ...state.keys,
        //             [keyProps.code]: {
        //                 pressed: true,
        //                 up: false,
        //                 down: false,
        //                 code: keyProps.code
        //             }
        //         }
        //     })
        // }

        switch ( keyProps.code ) {
            case 'KeyN':
                console.log('Nowa gra...');

                break;
            default:
                break;
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
