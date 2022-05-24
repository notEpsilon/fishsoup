import API from "./api";
import CartElement from "@/types/CartElement";

export default {
    addCartElement(info: CartElement) {
        return API.post('/cart', info);
    },

    getAllCartElements() {
        return API.get('/cart');
    },

    removeItem(id?: number) {
        return API.delete(`/cart/${id}`);
    }
};
