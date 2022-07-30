import * as actions from "../constants/user";

export const addUser = () => ({
    type: actions.ADD_USER,
    user: {
        username: "Jovanliuc",
        age: "32",
    },
});

export const removeUser = () => ({
    type: actions.REMOVE_USER,
    user: {
        username: "",
        age: "",
    }
});
