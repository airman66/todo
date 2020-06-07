import React, {useContext} from 'react';
import {Context} from './context';

export default function Buttons() {
    const {clearAllList, setTipsVisible, saveTodoList} = useContext(Context);

    return (
        <div id="buttons">
            <button className="save" onClick={() => saveTodoList()}>Сохранить</button>
            <button className="clear" onClick={() => clearAllList()}>Очистить</button>
            <button className="showTips" onClick={() => setTipsVisible(true)}>Справка</button>
        </div>
    );
}
