import { createSlice} from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactOperations";


export const contactSlice = createSlice({
    name: "contact",
    initialState: {
        items: [],
        isLoading: false,
        error: null
      },
      extraReducers: {
        [fetchContacts.pending](state) {
            state.isLoading = true
        },
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchContacts.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        [addContact.pending](state) {
            state.isLoading = true
        },
        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        },
        [addContact.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        [deleteContact.pending](state) {
            state.isLoading = true
        },
        [deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
                contact => contact.id === action.payload.id
              );
              state.items.splice(index, 1);
        },
        [deleteContact.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
      }
    // reducers: {
    //     addContacts: {
    //         reducer(state, action) {
    //             state.data.push(action.payload);
    //         },
    //         prepare(name, number) {
    //             return {
    //                 payload: {
    //                     id: nanoid(),
    //                     name: name,
    //                     number: number,

    //                 }
    //             }
    //         }
    //     },
    //     deleteContact(state, action) {
    //         const index = state.data.findIndex(contact => contact.id === action.payload);
    //         state.data.splice(index, 1);
    //     },
    // },
});

// export const {addContacts, deleteContact} = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;