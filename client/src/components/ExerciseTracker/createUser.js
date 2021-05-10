import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './navbar';

export default class CreateUsers extends Component {
    constructor(props) {
        super(props);
        
        
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeSubmit = this.onSubmit.bind(this);

        this.state = {
            username: ''
        }
    }

    onChangeUsername(event) {
        this.setState({
            username: event.target.value
        });
    }

    
    onSubmit = (event) => {
        event.preventDefault();
        const user = {
            username: this.state.username
        }
        console.log(user);
        
        axios.post("/users/add", user)
        .then(res => console.log(res.data));

        this.setState({
            username: ''
        })

}
    render() {return (
        <div>
            <Navbar />
             <h3>Create New Exercise Log</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Username:</label>
                    <input type="text"
                    required 
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="Create User" className="btn btn-primary" />

                </div>
            </form>        
        </div>
    )
}}
