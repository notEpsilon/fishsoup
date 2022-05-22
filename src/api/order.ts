import API from "./api";
import type Order from "@/types/Order";

export default {
    createOrder(orderInfo: Order) {
        return API.post('/orders', orderInfo);
    },

    getAllOrders(id: number | undefined) {
        return API.get(`/orders/${id}`);
    },

    deleteOrder(id?: number) {
        return API.delete(`/orders/${id}`);
    },

    getFullOrders() {
        return API.get('/orders');
    },

    markOrderAsDone(id?: number) {
        return API.put(`/orders/${id}`);
    }
};
