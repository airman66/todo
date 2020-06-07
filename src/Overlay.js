import React, {useContext} from 'react';
import {Context} from './context';

export default function Overlay() {
    const {tipsVisible, setTipsVisible} = useContext(Context);

    if (tipsVisible) {
        return (
            <div id = "overlay">
                <div className="closeTips" onClick={() => setTipsVisible(false)}>&times;</div>
                <ul className="tips">
                    <li>Чтобы спрятать или показать поле ввода, кликните на карандаш</li>
                    <li>Для добавления списка дел напишите текст в поле ввода и нажмите Ввод</li>
                    <li>Чтобы удалить один пункт, наведите на него и нажмите на значок корзины</li>
                    <li>Чтобы удалить все списки дел, нажмите "Очистить"</li>
                    <li>Нажмите "Сохранить", чтобы сохранить список дел на потом</li>
                </ul>
            </div>
        );
    } else {
        return (
            <div id = "overlay" className="display">
                <div className="closeTips" onClick={() => setTipsVisible(false)}>&times;</div>
                <ul className="tips">
                    <li>Чтобы спрятать или показать поле ввода, кликните на карандаш</li>
                    <li>Для добавления списка дел напишите текст в поле ввода и нажмите Ввод</li>
                    <li>Чтобы удалить один пункт, наведите на него и нажмите на значок корзины</li>
                    <li>Чтобы удалить все списки дел, нажмите "Очистить"</li>
                    <li>Нажмите "Сохранить", чтобы сохранить список дел на потом</li>
                </ul>
            </div>
        );
    }
}
