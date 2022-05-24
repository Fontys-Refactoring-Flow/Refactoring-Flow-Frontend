import React, { Component } from 'react'
import LoginImage from "../../Images/LoginImage.png"
import '../../style/AssignmentsPage.css'
import '../../style/Button.css'
import '../../style/Card.css'
import '../../style/Image.css'
import StudentService from '../../Services/StudentService'
import SessionHandler from '../../SessionHandler/SessionHandler'

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            studentid: 0
        }
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
    }

    componentDidMount(){
        SessionHandler.clearStudentId();
    }

    changeEmailHandler = (event) => {
        event.preventDefault();
        this.setState({ email: event.target.value });
    }

    changePasswordHandler = (event) => {
        event.preventDefault();
        this.setState({ password: event.target.value });
    }

    handleLogin = () => {
        StudentService.getLogin(this.state.email, this.state.password).then((res) => {
            this.setState({ studentid: res.data.id })
            console.log(this.state.studentid);
            SessionHandler.setStudentId(this.state.studentid);
        })
    }

    render() {
        return (
            <div className='d-flex align-items-start'>
                <div  className='col-8' style={{'marginRight': '2%'}}>
                    <img src={LoginImage} alt="fontys image" style={{'width': '100%', 'height': '100%vw'}}/>
                </div>
                <div className='col-3' style={{'marginLeft': '3%', 'marginRight': '2%', 'marginTop': '5%'}}>
                    <form>
                        <div className='form-group'>
                            <h5>Login</h5>
                            <label>E-mail address</label>
                            <input placeholder='E-mail address' name='email' className='form-control' value={this.state.email} onChange={this.changeEmailHandler} />
                            <label>Password</label>
                            <input type="password" placeholder='Password' name='password' className='form-control' value={this.state.password} onChange={this.changePasswordHandler} />
                            <a className="btn btn-refactoring text-white" onClick={this.handleLogin} href='/' style={{ marginTop: '10px' }}>
                                Login
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;