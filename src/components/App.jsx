
import React, {useEffect} from "react";
import Filter from "./Filter/Filter";
import Contacts from "./Contacts/Contacts";
import ContactForm from "./ContactForm/ContactForm";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getContacts} from "redux/selectors";
// import { addContacts, deleteContact } from "redux/contactSlice";
import { filterContact } from "redux/filterSlice";
import { fetchContacts, addContact, deleteContact } from "redux/contactOperations";

const App =() => {

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  // const filter = useSelector(getFilter);
 

 useEffect(() => {
  dispatch(fetchContacts())
 }, [dispatch]);

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
    dispatch(addContact({name: name, phone: number}))
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
