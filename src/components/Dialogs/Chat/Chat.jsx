import './Chat.css';

const Message = (props) => {
    return (
        <div className={"message " + props.yoursMessage}>
            <p className="message__text">{props.text}</p>
        </div>
    );
};

const Chat = () => {
    let messagesData = [
        {
            id: 4241,
            text: 'I am a normal popover and I can have text and everything',
        },
        {
            id: 4325,
            text: 'I am a normal popover and I can have text and everything',
        },
        {
            id: 125,
            text: 'I am a normal popover and I can have text and everything',
        },
        {
            id: 5651,
            text: 'I am a normal popover and I can have text and everything',
        },
        {
            id: 6513,
            text: 'I am a normal popover and I can have text and',
        },
        {
            id: 6132,
            text: 'I am a normal popover and I can have text and everything',
        },
    ];
    let messagesDataComponentProcess = messagesData.map(el => {
        return (<Message text={el.text} id={el.id} yoursMessage={el.id === 6513 || el.id === 125 ? "yours-message" : 0} />);
    });
    return (
        <div className="chat__wrapper">
            {messagesDataComponentProcess}
            <input type="text" className="chat__input" placeholder="Введите сообщение"/>
        </div>
    );
};

export default Chat;