import React from 'react'
import * as Store from "../store.js";
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Textfield from '../components/Textfield.js';
import Button from '../components/Button.js'; 

const Login = ({id}) => {

    let navigate = useNavigate();
    
    if (id == -1)
        return (
            <div className = 'Login'>
                <h1>Login</h1>
                        <form onSubmit={async (e) => {
                                e.preventDefault();
                                var username = e.target[0].value;
                                var password = e.target[1].value;
                                var id = await Store.getTokenID(username, password);
                                if (id != -1)
                                {
                                    await Store.getStoreContacts(id);
                                    navigate("/contacts");
                                }
                                console.log(e);
                            }}>
                            <Textfield Text = "Username" text_id = "username"/>
                            <Textfield Text = "Password" text_id = "password"/>
                            <Button text = "Login" text_id = "loginButton"/>
                        </form>
            </div>
        );
    else
        return (null);

}


export default connect((state) => ({id : state.id}))(Login);