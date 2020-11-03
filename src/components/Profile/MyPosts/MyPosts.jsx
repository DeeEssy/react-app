import './MyPosts.css';
import Post from './Post/Post';

const MyPosts = () => {
    let postsData = [
        {
            id: 512,
            text: 'dadadadada',
            likeCount: 15,
        },
        {
            id: 641,
            text: 'dadadadada',
            likeCount: 15,
        },
        {
            id: 74,
            text: 'dadadadada',
            likeCount: 51,
        },
        {
            id: 56135,
            text: 'dadadadada',
            likeCount: 91,
        },
        {
            id: 6516133,
            text: 'dadadadada',
            likeCount: 112,
        },
        {
            id: 7113,
            text: 'netnetnetnetn',
            likeCount: 8,
        },
    ];
    let postsDataComponentProcess = postsData.map(el => {
        return (<Post value={el.text} likeCount={el.likeCount} id={el.id} />);
    })

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
                {postsDataComponentProcess}
            </div>
         </div>
    );
};

export default MyPosts;