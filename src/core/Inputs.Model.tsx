
export interface IInputsProps {
    children: JSX.Element;
    onKeyDown: ( keyProps: IKeyProps ) => void;
    onKeyUp: ( keyProps: IKeyProps ) => void;
    onKeyPressed: ( keyProps: IKeyProps ) => void;
}



export const KEYS = [
    'KeyW',
    'KeyA',
    'KeyS',
    'KeyD',
    'KeyQ',
    'Space',
];

export interface IKeyProps {
    down: boolean;
    up: boolean;
    pressed: boolean;
    code:  string;
}


export interface IKeyPropsList {
    [index: string]: IKeyProps;
}


let defaultKeys: IKeyPropsList = {};

KEYS.map( ( item, index ) => {
    defaultKeys[ item ] = {
        code: item,
        down: false,
        pressed: false,
        up: false
    };
});

export const DEFAULT_KEYS = defaultKeys;