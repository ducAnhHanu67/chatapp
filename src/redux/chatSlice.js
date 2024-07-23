import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        chat: {
            name: null,
            chatId: null,
            messages: null,
        }

    },
    reducers: {
        getNameReceiver: (state, action) => {
            state.chat.name = action.payload;
        },
        getChatId: (state, action) => {
            state.chat.chatId = action.payload;
        },
        loadMessages: (state, action) => {
            state.chat.messages = action.payload
        },
        addMessages: (state, action) => {
            state.chat.messages.push(action.payload);
        }
    }

})
export const {
    getNameReceiver,
    getChatId,
    loadMessages,
    addMessages
} = chatSlice.actions;
export default chatSlice.reducer;