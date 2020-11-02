import { NavLink } from 'react-router-dom';
import './DialogChoice.css';

const DialogItem = (props) => {
    return (
        <li className="dialog-choice__item">
            <NavLink to={"/messages/" + props.idDialog} className="dialog-choice__link">{props.name}</NavLink>
        </li>
    );
};

const DialogChoice = () => {
    return (
        <div className="dialog-choice__wrapper">
            <h2 className="dialog-choice__title">DIALOGS</h2>
            <ul className="dialog-choice__list">
                <DialogItem name="Andrew" idDialog="31242142"/>
                <DialogItem name="Dmitry" idDialog="3543221412"/>
                <DialogItem name="Sasha" idDialog="213544321"/>
                <DialogItem name="Sveta" idDialog="3112154321"/>
                <DialogItem name="Valera" idDialog="2133154321"/>
                <DialogItem name="Viktor" idDialog="86546054321"/>
            </ul>
        </div>
    );
};

export default DialogChoice;