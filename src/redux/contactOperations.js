import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = "https://6469cb4603bb12ac2092bfac.mockapi.io";


export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
   try {
    const response = await axios.get("/contacts");
    return response.data;
   } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
   }
})


export const addContact = createAsyncThunk("contacts/addContact", async (data, thunkAPI) => {
    try {
        const response = await axios.post("/contacts", data);
    return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id, thunkAPI) => {
    try {
        const response = await axios.delete(`/contacts/${id}`);
    return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
    
})
