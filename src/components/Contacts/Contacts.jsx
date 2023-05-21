import React from "react";
import PropTypes from 'prop-types';
import css from './Contacts.module.css';
import { useSelector } from "react-redux";
import {getContacts, getFilter} from 'redux/selectors';


const filteredContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
)}

const Contacts = ({onDelete}) => {
    
const contacts = useSelector(getContacts);
const filter = useSelector(getFilter);
const filterOfContacts = filteredContacts(contacts, filter)

    return (
        <ul className={css.list}>
        {filterOfContacts.map(({id, name, phone}) => (
          <li
          className={css.contactItem}
          key={id}>
            <p className={css.nameContact}>{name}: {phone}</p>
            <button  className={css.buttonDelete} type="button" onClick={() => onDelete(id)}>Delete</button>
          </li>
        ))}
        
       </ul>
        )
}


export default Contacts;

Contacts.propTypes = {
      onDelete: PropTypes.func.isRequired,
  };