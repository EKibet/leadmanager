import React, { Component } from 'react'
import { Link } from "react-router-dom";
class Register extends Component {
    state = { 
        username: '',
        email: '',
        password: '',
        password2: ''
     }
     onSubmit = e =>{
         e.prevent
     }
    render() { 
        const {username, email, password, password2} = this.state;
        return (
            <div className="col-md-6 m-auto">
               <div className="card card-body mt-5">
                <h2 className="text-center">Register</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            className="form-control"
                            name="username"
                            type="text"
                            value={username}
                            onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            className="form-control"
                            name="email"
                            type="email"
                            value={email}
                            onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <textarea
                            className="form-control"
                            name="password"
                            type="password"
                            value={password}
                            onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <textarea
                            className="form-control"
                            name="password2"
                            type="password"
                            value={password2}
                            onChange={this.onChange} />
                    </div>                    
                    <div className="form-group">
                        <button className="btn btn-primary">Submit</button>

                    </div>
                </form>
                <p> Already have an account?<Link to="/login">Login</Link> </p>
            </div>    
            </div>
          );
    }
}
 
export default Register;