import API from "@/api/api";

interface NoIdProduct { name: string, image_link: string, price: number, amount: number }

export default {
    addDish(formInfo: NoIdProduct) {
        return API.post('/dish', formInfo);
    }
};
