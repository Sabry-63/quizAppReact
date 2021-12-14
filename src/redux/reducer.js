import {
    CHANGE_AMOUNT,
    CHANGE_CATEGORY,
    CHANGE_DEFFICLTY,
    CHANGE_SCORE,
    CHANGE_TYPE,
} from "./actionType";
const initialState = {
    qu_category: "",
    qu_diffic: "",
    qu_type: "",
    qu_amount: 10,
    score: 0,
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CATEGORY:
            return {
                ...state,
                qu_category: action.payload,
            };
        case CHANGE_DEFFICLTY:
            return {
                ...state,
                qu_diffic: action.payload,
            };
        case CHANGE_TYPE:
            return {
                ...state,
                qu_type: action.payload,
            };

        case CHANGE_AMOUNT:
            return {
                ...state,
                qu_amount: action.payload,
            };

        case CHANGE_SCORE:
            return {
                ...state,
                score: action.payload,
            };

        default:
            return state;
    }
};
export default reducer;
