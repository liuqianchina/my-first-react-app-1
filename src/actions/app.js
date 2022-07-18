import { 
    INCREMENT_VALUE,
    DECREMENT_VALUE,
} from "../constants/app";

export const incrementValue = () => ({
    type: INCREMENT_VALUE,
});

export const decrementValue = () => ({
    type: DECREMENT_VALUE,
});
