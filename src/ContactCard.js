import React from "react";

function ContactCard(props) {

    return (
      <div className="contact-card">
  
          <img src={props.contact.imgUrl} alt="jsx-a11y/alt-text"/>
          <h3>{props.contact.name}</h3>
          <p>Phone: {props.contact.phone}</p>
          <p>Email: {props.contact.email}</p>
          <p> Extra Orishirishi: {props.contact.others}</p>

      </div>
    );
  }
  
export default ContactCard