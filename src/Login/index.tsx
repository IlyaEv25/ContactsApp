import React from 'react'
import * as Store from "../store";
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Textfield from '../components/Textfield';
import Button from '../components/Button'; 

import {State} from '../state';

type LoginProps = {
    id: number
}

const Login = ({id} : LoginProps) => {

    let navigate = useNavigate();
    
    if (id == -1)
        return (
            <div className = 'Login'>
                <h1>Login</h1>
                        <form onSubmit={async (e) => {
                                e.preventDefault();
                                const target = e.target as typeof e.target & {
                                    '0': { value: string };
                                    '1': { value: string };
                                  };
                                var username: string = target[0].value;
                                var password = target[1].value;
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


export default connect((state : State) : LoginProps => ({id : state.id}))(Login);