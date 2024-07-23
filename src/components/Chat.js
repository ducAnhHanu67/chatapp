
import { useState, useEffect } from "react";
import Messages from "./Messages";
import { sendMessage } from "../redux/apiRequest";
import { useSelector, useDispatch } from "react-redux";
import { addMessages } from "../redux/chatSlice";
import socketIOClient from 'socket.io-client'
import {
    BsFillTelephoneFill, BsCameraVideoFill, BsPlusCircle,
    BsFillImageFill, BsFillEmojiSmileFill
} from 'react-icons/bs'
import { FiMoreHorizontal } from 'react-icons/fi'
import { AiFillFileAdd, AiOutlineSend } from 'react-icons/ai'
import { Input } from "./Input";
const socket = socketIOClient('http://localhost:5000');

function Chat() {
    // const [message, setMessage] = useState('');
    // const [keyPressCount, setKeyPressCount] = useState(0);
    // const chatId = useSelector(state => state.chat.chat.chatId);
    // const senderId = useSelector(state => state.auth.login.currentUser._id);
    const nameUser = useSelector(state => state.auth.login.currentUser.name);
    const nameReceiver = useSelector(state => state.chat.chat.name);
    const dispatch = useDispatch();
    const oneTime = 'T';


    useEffect(() => {
        socket.emit('onlineUser', nameUser)
        console.log('render DucAnh')
        socket.on('onlineUser', (data) => {
            console.log('onlineUser' + data)
            console.log('render useEffect')
        })

    }, [oneTime]);
    // useEffect(() => {
    //     socket.on('onlineUser', (data) => {
    //         console.log('onlineUser' + data)
    //         console.log('render useEffect')
    //     })
    // }, [])
    useEffect(() => {
        socket.on('message', (data) => {
            console.log('Received message:', data);
            dispatch(addMessages(data)); // Thêm tin nhắn mới vào danh sách tin nhắn
        });

        socket.on('disconnect', () => {
            console.log('Disconnected from server');
        });
    }, [socket]);
    console.log('render Chat')



    return (
        <div className='relative overflow-scroll  '>
            <div className="flex h-[60px] bg-slate-500 items-center pl-4 justify-between">
                <div className="flex items-center">
                    {/* <img className="h-[45px] w-[45px] rounded-[50%]" src="https://scontent.fhan15-2.fna.fbcdn.net/v/t1.6435-9/135857827_2958992114382421_4610286267028660814_n.jpg?_nc_cat=103&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=yKYPMZqe9TQAX-jLOOs&_nc_ht=scontent.fhan15-2.fna&oh=00_AfAyjd52CcmANdbf_kBy-QSoqjxn0LWQLy-nLNUyeQ5DPw&oe=64DDB790" alt="anh"></img> */}
                    <span className="font-bold ml-[10px]">{nameReceiver}</span>

                </div>
                <div className="flex text-violet-700 text-[25px] mr-[25px] w-[120px] justify-between">
                    <BsFillTelephoneFill></BsFillTelephoneFill>
                    <BsCameraVideoFill />
                    <FiMoreHorizontal />
                </div>
            </div>
            <Messages />
            <div className="absolute bottom-[10px]  flex text-[20px] text-white w-[100%] px-3 h-6 items-center">
                <BsPlusCircle />
                <BsFillImageFill />
                <AiFillFileAdd />
                <div className="flex relative w-[85%] border-2 border-black  rounded-lg overflow-hidden bg-white text-black"  >

                    {/* <input
                        className="w-[100%] pr-[26px] break-words leading-normal "
                        type="text"
                        placeholder="Send a message"
                        onKeyDown={handleKey}
                        onChange={e => setMessage(e.target.value)}
                        value={message}
                    /> */}
                    <Input socket={socket} />


                    <div className="absolute right-1 text-black top-1/2 transform -translate-y-1/2" >

                        <BsFillEmojiSmileFill />
                    </div>
                </div>
                <AiOutlineSend />
            </div>

        </div>
    );
}

export default Chat;
