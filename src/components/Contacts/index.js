import React, { useEffect, useState } from "react";
import Form from "./Form";
import List from "./List";
import "./styles.css";


function Contacts(props) {
  const [contacts, setContacts] = useState([
    {
    fullname:'Şafak',
    phone_number:'123456789',
  },
  {
    fullname:'Ömer',
    phone_number:'987654321',
  },
  {
    fullname:'İbrahim',
    phone_number:'432198765',
  },
  {
    fullname:'Erdem',
    phone_number:'999777666'
  }
  ]);


  useEffect(()=>{
    console.log(contacts)
  },[contacts])

  return (

    <div id="container"> 
    <h1 >Contacts</h1>
  
      <Form addContact={setContacts} contacts={contacts} />
      <List  contacts={contacts} />
    </div>
  );
}

export default Contacts;
