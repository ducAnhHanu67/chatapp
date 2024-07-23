import { useState } from "react";
import { loginUser } from "../redux/apiRequest";
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const newUser = {
            email: email,
            password: password,
        }
        loginUser(newUser, dispatch, navigate)
    }
    return (
        <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-tl from-blue-500 to-green-400">
            <div className="h-[320px] w-64 bg-slate-500 p-4" >
                <form onSubmit={handleLogin} className="flex flex-col ">
                    <label className="p-2">Email</label>
                    <input
                        className="px-1 py-1 text-[17px]"
                        type="text" placeholder="Enter your emails"
                        onChange={(e) => { setEmail(e.target.value) }}
                    ></input>
                    <label className="p-2" >PassWord</label>
                    <input className="mb-3 px-1 py-1 text-[17px]" type="password" placeholder="Enter your password"
                        onChange={(e) => { setPassword(e.target.value) }}
                    ></input>
                    <div className="flex mx-2 space-x-6 mt-[40px]">
                        <button className="p-2 w-[90px] rounded bg-slate-100 text-black" type="submit" > Sign in  </button>
                        <button className="p-2 w-[90px] rounded bg-slate-100 text-black" type="submit">
                            <Link to='/register'>
                                Register
                            </Link>
                        </button>
                    </div>

                </form>
            </div>
        </div>);
}

export default Login;