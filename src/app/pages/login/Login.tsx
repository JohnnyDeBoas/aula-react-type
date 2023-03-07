// import { useNavigate } from "react-router-dom"

import { useState } from "react"


export const Login = () => {
    // const history = useNavigate();

    // const handleClick = () => {
    //     history('/home')
    // }

    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 

    const handleEnter = () => {
        console.log(email)
        console.log(password)
    }
    return (
        <div>
            <form action="">
                <label htmlFor="">
                    <span>Email</span>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                </label>
                <label htmlFor="">
                    <span>Password</span>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </label>
                <button type="button" onClick={handleEnter}>Login</button>
            </form>
        </div>
    )
}