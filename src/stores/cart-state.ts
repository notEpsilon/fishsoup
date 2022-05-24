import { defineStore } from "pinia";

export default defineStore('cart-store', {
    state: () => ({
        open: false,
        count: parseInt(localStorage.getItem('cart-size') || '0') >= 0 ? parseInt(localStorage.getItem('cart-size') || '0') : 0
    }),
    getters: {
        isOpen(state) {
            return state.open;
        }
    },
    actions: {
        toggleCart() {
            this.open = !this.open;
        },
        closeCart() {
            this.open = false;
        },
        openCart() {
            this.open = true;
        }
    }
});
