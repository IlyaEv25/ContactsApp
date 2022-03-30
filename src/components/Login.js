import React from 'react'
import * as Store from "../store.js";
import { connect } from 'react-redux'

import { useNavigate } from 'react-router-dom'

const Login = ({id}) => {

    let navigate = useNavigate();

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
                        <input></input>
                        <input></input>
                        <button type = "submit">Login</button>
                    </form>
        </div>
        );
    else
        return (null);

}

export default connect((state) => ({"id" : state.id}))(Login);