import React from 'react';
import Button from './Button';
import './Contact.scss'

const Contact = ({contact, delete_el}) => (
    <li className="mdc-list-item Item" tabIndex="0">
      <span className="mdc-list-item__ripple"></span>
        <div className="mdc-list-item__text Text">
          <span className="mdc-list-item__primary-text">{contact.name}</span>
          <span className="mdc-list-item__secondary-text"> {contact.data}</span>
        </div>
        <Button text = "D" text_id = "dButton" onClick = {delete_el}/>
    </li>
);

export {Contact as default}