import './ProfileInfo.css';

const ProfileInfo = () => {
    return (
        <div className="main__info">
            <img className="main__avatar" src="https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1090&q=80" alt=""/>
            <div className="main__text">
                <h1 className="main__title">Dmitry Karas'</h1>
                <ul className="main__list">
                    <li className="main__item">Date of Birth: 30.01.1999</li>
                    <li className="main__item">City: Vinnica</li>
                    <li className="main__item">Education: Nick Vychich Academy</li>
                    <li className="main__item">Web Site: 297974</li>
                </ul>
            </div>
        </div>
    );
};

export default ProfileInfo;