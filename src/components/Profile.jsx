const Profile = () => {
    return (
        <main className="main">
            <img className="main__top-image" src="https://images.unsplash.com/photo-1604000644495-56db94aec0b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt=""/>
            <div className="main__content">
                <div className="main__info">
                    <img className="main__avatar" src="https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1090&q=80" alt=""/>
                    <div className="main__text">
                        <h1 className="main__title">Dmitry K.</h1>
                        <ul className="main__list">
                            <li className="main__item">Date</li>
                            <li className="main__item">City</li>
                            <li className="main__item">Education</li>
                            <li className="main__item">Web Site</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="new-post">
                <h2 className="new-post__title">My posts</h2>
                <form>
                    <textarea name="new-post__text" className="new-post__text" id="new-post__text" cols="30" rows="10" placeholder="your news..."></textarea>
                    <button className="new-post__btn">Send</button>
                </form>
            </div>
            <div className="posts">
                <span className="post">Hey, somebody love me?</span>
                <span className="post">It's our new program! Hey!</span>
            </div>
        </main>
    );
};

export default Profile;