import Message from "./Message";
import { useSelector } from "react-redux";



function Messages() {
    const messages = useSelector(state => state.chat.chat.messages);
    console.log(messages);
    return (
        <div className="messages overflow-y-auto ">
            {messages && messages.map(mes => (
                <Message key={mes._id} text={mes.text} senderId={mes.senderId} />))}
        </div>

    );
}

export default Messages;