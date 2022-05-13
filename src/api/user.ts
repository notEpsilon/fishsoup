import LoginFormInfo from "@/types/LoginFormInfo";
import type RegsiterFormInfo from "@/types/RegisterFormInfo";
import API from "./api";
import CSRF from "./csrf";

export default {
    async register(formInfo: RegsiterFormInfo) {
        await CSRF.getCSRFToken();
        return API.post('/register', formInfo);
    },

    async login(formInfo: LoginFormInfo) {
        await CSRF.getCSRFToken();
        return API.post('/login', formInfo);
    },

    async logout() {
        return API.post('/logout');
    },

    getCurrentUser() {
        return API.get('/user');
    }
};
