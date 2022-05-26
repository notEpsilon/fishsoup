import API from "./api";
import CartElement from "@/types/CartElement";

export default {
    addCartElement(info: CartElement) {
        return API.post('/cart', info);
    },

    getAllCartElements(id?: number) {
        return API.get(`/cart/${id}`);
    },

    removeItem(id?: number) {
        return API.delete(`/cart/${id}`);
    }
};
