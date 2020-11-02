import { NavLink } from 'react-router-dom';
import './SideBar.css';

const SideBar = () => {
    return (
        <aside className="sidebar">
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item"><NavLink className="nav__link" to="/profile">Profile</NavLink></li>
                    <li className="nav__item"><NavLink className="nav__link" to="/messages">Messages</NavLink></li>
                    <li className="nav__item"><a className="nav__link" href="#s">News</a></li>
                    <li className="nav__item"><a className="nav__link" href="#s">Music</a></li>
                    <li className="nav__item"><a className="nav__link" href="#s">Settings</a></li>
                </ul>
            </nav>
        </aside>
    );
};

export default SideBar;