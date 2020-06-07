import React, {useContext} from 'react';
import {Context} from './context';

export default function AppHeader() {
    const {toggleForm} = useContext(Context);

    return (
        <h1>
            Мои списки дел <i onClick={() => toggleForm()} id="pensil" className="fas fa-pencil-alt"></i>
        </h1>
    );
}
