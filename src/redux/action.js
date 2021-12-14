import {
    CHANGE_CATEGORY,
    CHANGE_DEFFICLTY,
    CHANGE_TYPE,
    CHANGE_AMOUNT,
    CHANGE_SCORE,
} from "./actionType";

export const handleCatogryChange = (payload) => ({
    type: CHANGE_CATEGORY,
    payload,
});

export const handleDifficltyChange = (payload) => ({
    type: CHANGE_DEFFICLTY,
    payload,
});

export const handleTypeChange = (payload) => ({
    type: CHANGE_TYPE,
    payload,
});

export const handleAmountChange = (payload) => ({
    type: CHANGE_AMOUNT,
    payload,
});

export const handleScoreChange = (payload) => ({
    type: CHANGE_SCORE,
    payload,
});
