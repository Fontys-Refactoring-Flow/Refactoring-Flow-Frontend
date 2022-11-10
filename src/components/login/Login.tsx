import React, {FormEvent, useState} from 'react'
import LoginImage from "../../images/LoginImage.png"
import '../../style/AssignmentsPage.css'
import '../../style/Button.css'
import '../../style/Card.css'
import '../../style/Image.css'
import {useAuth} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";

function Login() {
    const auth = useAuth()
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = (e: FormEvent) => {
        e.preventDefault()
        auth?.login(email, password).then(
            () => {
                navigate("/")
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                setMessage(resMessage);
            }
        )
    }

    return (
        <div className='d-flex align-items-start'>
            <div className='col-8' style={{ 'marginRight': '2%' }}>
                <img src={LoginImage} alt="fontys image" style={{ 'width': '100%', 'height': '100%vw' }} />
            </div>
            <div className='col-3' style={{ 'marginLeft': '3%', 'marginRight': '2%', 'marginTop': '5%' }}>
                <form onSubmit={handleLogin}>
                    <h5>Login</h5>
                    <label>E-mail address</label>
                    <input placeholder='E-mail address' name='email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label>Password</label>
                    <input type="password" placeholder='Password' name='password' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className="btn btn-refactoring text-white"  style={{ marginTop: '10px' }}>Login</button>
                    <p style={{color: 'red'}}>{message}</p>
                </form>
            </div>
        </div>
    );
}

export default Login;