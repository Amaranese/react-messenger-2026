const initialState = {
    items: [],
    loading: false,
};

export default function contacts(state = initialState, action) {
    switch (action.type) {
        case 'CONTACT_LOAD':
            return{
                ...state,
                loading: true
            };
        case 'CONTACT_SUCCESS':
            return{
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