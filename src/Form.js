import React, {useContext} from 'react';
import {Context} from "./context";

export default function Form() {
    const {onFormSubmit, inputValue, onInputChange, formVisible} = useContext(Context);

    if (formVisible) {
        return (
            <input
                onKeyPress={e => onFormSubmit(e)}
                value={inputValue}
                onChange={e => onInputChange(e)} 
                type="text" 
                placeholder="Добавить список"
            />
        );
    } else {
        return (
            <input
                className="display"
                onKeyPress={e => onFormSubmit(e)}
                value={inputValue}
                onChange={e => onInputChange(e)} 
                type="text" 
                placeholder="Добавить список"
            />
        );
    }
}