const initialState = {
    items: [],
    loading: false
};
export default function messages(state = initialState, action) {
    switch (action.type) {
        case 'MESSAGES_LOAD':
            return {
                ...state,
                loading: true
            }
        case 'MESSAGES_SUCCESS':
            return {
                ...state,
                items: action.payload,
                loading: false
            }

        default:
            return state;
    }
}

// тут экшн креэйторы

// тут санки