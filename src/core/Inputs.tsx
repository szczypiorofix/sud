import React, { useState, useEffect } from "react";
import {IInputsProps, KEYS} from "./Inputs.Model";



export const Inputs: React.FC<IInputsProps> = ( props: IInputsProps ) => {


    const keydown = ( e: KeyboardEvent ) => {
        props.onKeyDown({
            code: e.code,
            down: true,
            pressed: false,
            up: false
        });
    }

    const keyup = ( e: KeyboardEvent ) => {
        props.onKeyUp({
            code: e.code,
            down: false,
            pressed: false,
            up: true
        });
    }

    const keypressed = ( e: KeyboardEvent ) => {
        if ( KEYS.indexOf( e.code) > -1 ) {
            props.onKeyPressed({
                code: e.code,
                down: false,
                pressed: true,
                up: false
            });
        }
    }


    const setListeners = () => {
        window.addEventListener( 'keydown', keydown );
        window.addEventListener( 'keyup', keyup );
        window.addEventListener( 'keypress', keypressed );
    }

    const removeListeners = () => {
        window.removeEventListener( 'keydown', keydown );
        window.removeEventListener( 'keyup', keyup );
        window.removeEventListener( 'keypress', keypressed );
    }

    console.log('[render]: Inputs');

    useEffect( () => {
        setListeners();
        return () => {
            removeListeners();
        }
    }, [] );

    return <div className="game-container">
        { props.children }
    </div>

}
