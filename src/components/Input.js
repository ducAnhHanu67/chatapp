import React, { useState } from 'react'
import { sendMessage } from "../redux/apiRequest";
import { useSelector, useDispatch } from 'react-redux';
import { addMessages } from "../redux/chatSlice";

export const Input = ({ socket }) => {
    const [message, setMessage] = useState('');
    const chatId = useSelector(state => state.chat.chat.chatId);
    const senderId = useSelector(state => state.auth.login.currentUser._id);
    const nameReceiver = useSelector(state => state.chat.chat.name);

    const dispatch = useDispatch();

    const handleChat = () => {
        const newMessage = {
            chatId: chatId,
            senderId: senderId,
            text: message,
            nameReceiver: nameReceiver
        };

        sendMessage(newMessage)
            .then(res => {
                console.log(res);
                dispatch(addMessages(res));
                setMessage('');
                socket.emit('message', newMessage); // Gửi tin nhắn qua kết nối socket
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleKey = e => {
        if (e.code === 'Enter' && message.trim() !== '') {
            handleChat();
        }
    };
    return (
        <input
            className="w-[100%] pr-[26px] break-words leading-normal "
            type="text"
            placeholder="Send a message"
            onKeyDown={handleKey}
            onChange={e => setMessage(e.target.value)}
            value={message}
        />
    )
}
