const SideBar = () => {
    return (
        <aside className="sidebar">
            <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item"><a href="#s">Profile</a></li>
                <li className="nav__item"><a href="#s">Messages</a></li>
                <li className="nav__item"><a href="#s">News</a></li>
                <li className="nav__item"><a href="#s">Music</a></li>
                <li className="nav__item"><a href="#s">Settings</a></li>
            </ul>
            </nav>
        </aside>
    );
};

export default SideBar;