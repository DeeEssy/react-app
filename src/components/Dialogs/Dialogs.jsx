import DialogChoice from './DialogChoice/DialogChoice';
import Chat from './Chat/Chat';
import './Dialogs.css';

const Dialogs = () => {
    return (
        <div className="dialogs-wrapper">
            <DialogChoice />
            <Chat />
        </div>
    );
};

export default Dialogs;