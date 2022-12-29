
export interface IInputsProps {
    children: JSX.Element;
    setKeys: (keys: IKeyProps[] ) => void;
    allowSpecialKeys: boolean;
}

export enum KEY {
    KEY_W = 'KeyW',
    KEY_S = 'KeyS',
    KEY_A = 'KeyA',
    KEY_D = 'KeyD',
    KEY_SPACE = 'Space',
    KEY_UP = 'ArrowUp',
    KEY_DOWN = 'ArrowDown',
    KEY_LEFT = 'ArrowLeft',
    KEY_RIGHT = 'ArrowRight',
    KEY_ENTER = 'Enter'
}

export interface IKeyProps {
    code: KEY;
    isDown: Boolean;
    isUp: Boolean;
    press: ()=> void;
    release: ()=> void;
    downHandler: ( event: KeyboardEvent ) => void;
    upHandler: ( event: KeyboardEvent ) => void;
}
