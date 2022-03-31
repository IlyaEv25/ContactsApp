import React, {useEffect} from 'react'
import * as Store from "../store.js";
import { connect } from 'react-redux'
import './Login.scss'
import { useNavigate } from 'react-router-dom'
import {MDCTextField} from '@material/textfield';

const Login = ({id}) => {

    let navigate = useNavigate();

    useEffect( () => {
            var username = document.querySelector('.username');
            var password = document.querySelector('.password');
            if (password && username)
            {
                username = new MDCTextField(username);
                password = new MDCTextField(password);
            }
                console.log(document)
    });
    
    if (id == undefined)
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
                        <label className="mdc-text-field mdc-text-field--filled username">
                            <span className="mdc-text-field__ripple"></span>
                            <input type="text" className="mdc-text-field__input" aria-labelledby="username-label" name="username"/>
                            <span className="mdc-floating-label" id="username-label">Username</span>
                            <span className="mdc-line-ripple"></span>
                        </label>
                        <label className="mdc-text-field mdc-text-field--filled password">
                            <span className="mdc-text-field__ripple"></span>
                            <input type="password" className="mdc-text-field__input" aria-labelledby="password-label" name="password"/>
                            <span className="mdc-floating-label" id="password-label">Password</span>
                            <span className="mdc-line-ripple"></span>
                        </label>
                        <button type = "submit">Login</button>
                    </form>
        </div>
        );
    else
        return (null);

}


export default connect((state) => ({"id" : state.id}))(Login);