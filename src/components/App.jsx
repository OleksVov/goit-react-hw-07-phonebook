
// import React, {useState, useEffect} from "react";
// import { nanoid } from 'nanoid'
import Filter from "./Filter/Filter";
import Contacts from "./Contacts/Contacts";
import ContactForm from "./ContactForm/ContactForm";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getContacts} from "redux/selectors";
import { addContacts, deleteContact } from "redux/contactSlice";
import { filterContact } from "redux/filterSlice";

const App =() => {
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  console.log(contacts);
  // const filter = useSelector(getFilter);
 
// saving in LocalStorage

// useEffect(() => {
 
//       localStorage.setItem('contacts', JSON.stringify(contacts))
     
// },[contacts]);
 

// useEffect(() => {
//   const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);

//     if(parsedContacts) {
//       setContacts([
//         {id:nanoid(), name: 'Rosie Simpson', number: '459-12-56'},
//       {id: nanoid(), name: 'Hermione Kline', number: '443-89-12'},
//       {id: nanoid(), name: 'Eden Clements', number: '645-17-79'},
//       {id: nanoid(), name: 'Annie Copeland', number: '227-91-26'},
//       ]);
//     } 
// },[])

 

  const checkExistingContact = (array, newName) => {
    return array.some(({ name }) => {
      return newName.toLowerCase() === name.toLowerCase();
    });
  };


  const handleAddContacts = (name,number) => {
    const checkContact =checkExistingContact(contacts, name);
    if (checkContact) {
      alert (`${name} is already in contacts`)
      return;
    }
    dispatch(addContacts(name, number))
  };
  
  const handleDeleteContact = contactId => {
   dispatch(deleteContact(contactId))
  
  };

  const changeFilter = event => {
    dispatch(filterContact(event.target.value))
  }



    return (
      <div style={{
        padding: 40,
      }}>
        <h1>Phonebook</h1>
        <ContactForm 
        onSubmit={handleAddContacts}
        />
      
       <h2>Contacts</h2>
       <Filter onChange={changeFilter}/>
       <Contacts
       onDelete={handleDeleteContact}/>
      
      </div>
    );
  
  
};
export default App;
