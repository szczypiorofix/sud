import React, {useEffect} from "react";
import {IInputsProps, IKeyProps, KEY} from "./Inputs.Model";


export const Inputs: React.FC<IInputsProps> = ( props: IInputsProps ) => {

    // const [keys, setKeys ] = useState<IKeyProps[]>([] );

    const setListeners = (): IKeyProps[] => {
        const keyUp    = prepareKey( KEY.KEY_UP );
        const keyRight = prepareKey( KEY.KEY_RIGHT );
        const keyDown  = prepareKey( KEY.KEY_DOWN );
        const keyLeft  = prepareKey( KEY.KEY_LEFT );

        const keyW     = prepareKey( KEY.KEY_W );
        const keyD     = prepareKey( KEY.KEY_D );
        const keyS     = prepareKey( KEY.KEY_S );
        const keyA     = prepareKey( KEY.KEY_A );

        const keySpace = prepareKey( KEY.KEY_SPACE );

        return [
            keyUp,
            keyRight,
            keyDown,
            keyLeft,

            keyW,
            keyD,
            keyS,
            keyA,

            keySpace
        ];
    }


    const prepareKey = ( keyCode: KEY ): IKeyProps => {
        let key: IKeyProps = {
            code: keyCode,
            isDown: false,
            isUp: true,
            press: () => {}, // default callback on press key
            release: () => {}, // default callback on release key
            downHandler: function( event) {
                if ( event.code === key.code ) {
                    if (key.isUp && key.press) {
                        key.press();
                    }
                    key.isDown = true;
                    key.isUp = false;
                }
                if ( !props.allowSpecialKeys ) {
                    event.preventDefault();
                    return;
                }
                if ( event.code !== 'F5' && event.code !== 'F12' ) {
                    event.preventDefault();
                }
            },
            upHandler: function(event) {
                if (event.code === key.code) {
                    if (key.isDown && key.release) {
                        key.release();
                    }
                    key.isDown = false;
                    key.isUp = true;
                }
                if ( !props.allowSpecialKeys ) {
                    event.preventDefault();
                    return;
                }
                if ( event.code !== 'F5') {
                    event.preventDefault();
                }
            }
        }

        window.addEventListener("keydown", key.downHandler.bind(key), false);
        window.addEventListener("keyup", key.upHandler.bind(key), false);

        return key;
    }


    const removeListeners = () => {
        // window.removeEventListener( 'keydown', keydown );
        // window.removeEventListener( 'keyup', keyup );
        // window.removeEventListener( 'keypress', keypressed );
    }

    // console.log('[render]: Inputs');

    useEffect( () => {
        props.setKeys( setListeners() );
        return () => {
            removeListeners();
        }
    }, [] );

    return  <div className="game-container">{ props.children }</div>

}
