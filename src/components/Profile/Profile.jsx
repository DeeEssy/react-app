import MyPosts from './MyPosts/MyPosts';
import './Profile.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
    return (
        <main className="main">
            <img className="main__top-image" src="https://images.unsplash.com/photo-1604000644495-56db94aec0b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt=""/>
            <div className="main__content">
                <ProfileInfo />
            </div>
            <MyPosts />
        </main>
    );
};

export default Profile;