import './Post.css';

const Post = (props) => {
    return (
        <div className="post">
            <span className="post__text">{props.value}</span>
            <span className="post__like">Like {props.likeCount}</span>
        </div>
    );
};

export default Post;