import API from "@/api/api";

export default {
    getAllProducts() {
        return API.get('/products');
    },

    getSingleProduct(id?: number) {
        return API.get(`/products/${id}`);
    }
};
