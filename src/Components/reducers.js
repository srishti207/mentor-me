const initialState = {
    conversation: [],
};

export const conversationReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_MESSAGE":
            return {
                ...state,
                conversation: [...state.conversation, action.payload],
            };
        default:
            return state;
    }
};