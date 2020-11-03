import { NavLink } from 'react-router-dom';
import './DialogChoice.css';

const DialogItem = (props) => {
    return (
        <li className="dialog-choice__item">
            <NavLink to={"/messages/" + props.idDialog} className="dialog-choice__link">{props.name}</NavLink>
        </li>
    );
};

const DialogChoice = (props) => {
    let usersData = [
        {
            id: 31242142,
            name: 'Andrew',
        },
        {
            id: 3543221412,
            name: 'Dmitry',
        },
        {
            id: 213544321,
            name: 'Sasha',
        },
        {
            id: 3112154321,
            name: 'Sveta',
        },
        {
            id: 2133154321,
            name: 'Valera',
        },
        {
            id: 86546054321,
            name: 'Viktor',
        },
    ];
    let usersDataComponentProcess = usersData.map(el => {
        return (<DialogItem  name={el.name} idDialog={el.id}/>);
    });
    return (
        <div className="dialog-choice__wrapper">
            <h2 className="dialog-choice__title">DIALOGS</h2>
            <ul className="dialog-choice__list">
                {usersDataComponentProcess}
            </ul>
        </div>
    );
};

export default DialogChoice;