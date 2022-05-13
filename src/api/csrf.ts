import API from "./api";

export default {
    getCSRFToken() {
        return API.get('/csrf-cookie');
    }
};
