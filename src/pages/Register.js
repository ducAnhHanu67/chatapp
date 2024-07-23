// import { useDispatch } from 'react-redux'
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../redux/apiRequest';
function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    // const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const newUser = {
            name: name,
            email: email,
            password: password,
        }
        RegisterUser(newUser, navigate)
    }
    return (
        <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-tl from-blue-500 to-green-400">
            <div className="h-[320px] w-64 bg-slate-500 p-4" >
                <form onSubmit={handleRegister} className="flex flex-col space-y-2">
                    <label className="p-2" >Name</label>
                    <input
                        className="px-1 py-1 text-[15px]"
                        type="text" placeholder="Enter your name"
                        onChange={(e) => { setName(e.target.value) }}
                    ></input>
                    <label className="p-2">Email</label>
                    <input
                        className="px-1 py-1 text-[15px]"
                        type="text" placeholder="Enter your emails"
                        onChange={(e) => { setEmail(e.target.value) }}
                    ></input>
                    <label mb-3>PassWord</label>
                    <input
                        className="px-1 py-1 text-[15px]"
                        type="password" placeholder="Enter your password"
                        onChange={(e) => { setPassword(e.target.value) }}
                    ></input>
                    <div className="flex justify-center">
                        <button type="submit" className="p-2 w-[90px] rounded bg-slate-100 text-black"  > Register  </button>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default Register;