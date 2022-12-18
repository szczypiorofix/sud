import React  from "react";
import {MenuList} from "./MenuList";
import {IMainMenuItem} from "./MainMenu.Model";
import {IKeyProps} from "../../core/Inputs.Model";
import {Inputs} from "../../core/Inputs";
import {useGlobalContext} from "../../core/MainAppContext";

import './MainMenu.scss';
import {STAGE} from "../../App.model";
import {APP_SETTINGS_REDUCER_ACTION_TYPE} from "../../core/AppStageReducer";


export const MainMenu: React.FC  = () => {

    const { appState, setAppState } = useGlobalContext();

    const menu: IMainMenuItem[] =
    [
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
    ];

    const onKeyPressed = ( keyProps: IKeyProps ) => {
        switch ( keyProps.code ) {
            case 'KeyN':
                setAppState(
                    {
                        ...appState,
                        stage: STAGE.NEW_GAME
                    },
                    APP_SETTINGS_REDUCER_ACTION_TYPE.MOVE_TO_STAGE
                );
                break;
            case 'Space':
                setAppState(
                    {
                        ...appState,
                        playerName: "Emil Pierdololo"
                    },
                    APP_SETTINGS_REDUCER_ACTION_TYPE.CHANGE_PLAYER_NAME
                );
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
                    list={ menu }
                />
            </Inputs>
        </div>
    </div>
}
