import React, { useState } from "react";
import { FindUser, createChat, getMessages } from "../redux/apiRequest";
import { useSelector, useDispatch } from "react-redux";
import { getNameReceiver, getChatId, loadMessages } from "../redux/chatSlice";

function SearchBar() {
    const [username, setUsername] = useState('')
    const [users, setUsers] = useState(null)
    const dispatch = useDispatch();
    // const [err, setErr] = useState(false)
    const data123 = useSelector(state => state.auth.login.currentUser);
    // console.log(data123)

    const handleSelectChat = (user) => {
        dispatch(getNameReceiver(user.name))
        const newChat = {
            firstId: data123._id,
            secondId: user._id,
        };
        createChat(newChat).then(res => {
            dispatch(getChatId(res._id))
            return getMessages(res._id)
        }
        ).then(res => {
            dispatch(loadMessages(res))
        })
            .catch(error => {
                console.log(error)
            })
    }
    const handleSearch = () => {
        FindUser(username)
            .then(res => {
                // console.log(res)
                setUsers(res);
            })
            .catch(error => {
                console.log(error)
            })

    };
    const handleKey = e => {
        e.code === 'Enter' && handleSearch();
    };
    return (
        <div className="search">
            <div className="searchInput" >
                <input type="text" placeholder="Find a user" onChange={e => setUsername(e.target.value)} onKeyDown={handleKey} />
            </div>
            {users && <div className="userChats" >

                {users.map(user => (
                    <div onClick={() => handleSelectChat(user)} key={user._id} className="userChat">
                        {/* <img src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/301769123_110168685161390_5285299077230900236_n.jpg?_nc_cat=104&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=1A2Md9fCnE8AX9xSmvw&_nc_ht=scontent.fhan15-2.fna&oh=00_AfDTp6-FF1PJZ2pmx9GCkdfjTfqLCjnPqk4kv-Lu4Sj20Q&oe=64BAA711" alt="anh"></img> */}
                        <span>{user.name}</span>
                    </div>
                )
                )}
                {/* {console.log((users))} */}
                {/* <span>{users.name}</span> */}

            </div>}
        </div>
    );
}

export default SearchBar;