import * as actions from "../constants/product";

export const addProduct = () => ({
    type: actions.ADD_PRODUCT,
    product: {
        productName: "Mobile Phone",
        productNumber: "10",
    },
});

export const removeProduct = () => ({
    type: actions.REMOVE_PRODUCT,
    product: {
        productName: "",
        productNumber: "",
    }
});
