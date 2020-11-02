import './Chat.css';

const Message = (props) => {
    return (
        <div className={"message " + props.yoursMessage}>
            <p className="message__text">{props.text}</p>
        </div>
    );
};

const Chat = () => {
    return (
        <div className="chat__wrapper">
            <Message text="I am a normal popover and I can have text and everything"/>
            <Message yoursMessage="yours-message" text="I am a normal popover and I can have text and everything"/>
            <Message text="I am a normal popover and I can have text and everything"/>
            <Message text="I am a normal popover and I can have text and everything"/>
            <Message text="I am a normal popover and I can have text and everything"/>
            <Message yoursMessage="yours-message" text="I am a normal popover and I can have text and everything"/>
            <input type="text" className="chat__input" placeholder="Введите сообщение"/>
        </div>
    );
};

export default Chat;