import './MyPosts.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            <div className="new-post">
                <h2 className="new-post__title">My posts</h2>
                <form>
                    <textarea name="new-post__text" className="new-post__text" id="new-post__text" cols="30" rows="10" placeholder="your news..."></textarea>
                    <button className="new-post__btn">Send</button>
                </form>
            </div>
            <div className="posts">
                <Post value = "dadadadada" likeCount = "15"/>
                <Post value = "netnetnetnetn" likeCount = "20"/>
            </div>
         </div>
    );
};

export default MyPosts;