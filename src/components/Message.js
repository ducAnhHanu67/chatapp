import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

function Message({ text, senderId }) {
    const currentUser = useSelector(state => state.auth.login.currentUser._id)
    const ref = useRef()

    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: "smooth" })
    }, [text])
    const messageClass = currentUser === senderId
        ? "px-3 py-2 rounded-2xl bg-violet-600 text-white"
        : "px-3 py-2 rounded-2xl bg-white text-black";
    const owner = currentUser === senderId ? 'flex justify-end ' : '';

    return (<div ref={ref} className={`mb-[20px] ${owner}`} >
        <span className={` ${messageClass} `} >{text}</span>
    </div >);
}

export default Message;