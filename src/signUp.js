import React from 'react';
//Setting up username and password for user to login
class Signup extends Component {
    constructor(props) { 
        super(props)
        this.state = {
            username: '', 
            password: ''
        };
    }

    handleChange = (event) => {
this.setState({
[event.target.name]: event.target.value,
});
    }
}
