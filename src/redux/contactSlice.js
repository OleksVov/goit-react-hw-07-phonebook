import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState = {
    data: [
        {id:nanoid(), name: 'Rosie Simpson', number: '459-12-56'},
          {id: nanoid(), name: 'Hermione Kline', number: '443-89-12'},
          {id: nanoid(), name: 'Eden Clements', number: '645-17-79'},
          {id: nanoid(), name: 'Annie Copeland', number: '227-91-26'},
    ]
};


export const contactSlice = createSlice({
    name: "contact",
    initialState: contactsInitialState,
    reducers: {
        addContacts: {
            reducer(state, action) {
                state.data.push(action.payload);
            },
            prepare(name, number) {
                return {
                    payload: {
                        id: nanoid(),
                        name: name,
                        number: number,

                    }
                }
            }
        },
        deleteContact(state, action) {
            const index = state.data.findIndex(contact => contact.id === action.payload);
            state.data.splice(index, 1);
        },
    },
});

export const {addContacts, deleteContact} = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;