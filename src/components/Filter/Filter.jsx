import React from "react";
import PropTypes from 'prop-types';
import css from './Filter.module.css'
import { useSelector } from "react-redux";
import { getFilter } from "redux/selectors";

const Filter = ({onChange}) =>{
    const filter = useSelector(getFilter);
    console.log(filter);
    return(
        <label htmlFor="" className={css.label} >Find contacts by name
           <input 
           type="text"
           value={filter}
           name="filter"
           onChange={onChange} />
           </label>
    )
}

export default Filter;


Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    // value: PropTypes.string.isRequired,
};