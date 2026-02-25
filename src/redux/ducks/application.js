const initialState = {
    items: [],
    loading: false,
};


export default function application(state = initialState, action) {
    switch (action.type) {
        case 'PROFILE_LOAD':
            return {
                ...state,
                loading: true,
            };
        case 'PROFILE_SUCCESS':
            return {
                ...state,
                items: action.payload,
            }
        default:
            return state;
    }

}


// тут экшн креэйторы

// тут санки