import { defineStore, _GettersTree } from "pinia";
import cartAPI from "@/api/cart";
import CartElement from "@/types/CartElement";

interface State { open: boolean; content: CartElement[]; }
interface Getters extends _GettersTree<State> {
    isOpen: (state: State) => boolean;
    getContent: (state: State) => CartElement[];
    getCount: (state: State) => number;
}

export default defineStore<string, State, Getters>('cart-store', {
    state: () => ({
        open: false,
        content: localStorage.getItem('cart-elements') ? JSON.parse(localStorage.getItem('cart-elements') || JSON.stringify([])) : []
    }),
    getters: {
        isOpen(state) {
            return state.open;
        },

        getContent(state) {
            return state.content;
        },

        getCount(state) {
            return state.content.reduce((prev, curr) => prev + curr.quantity, 0);
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
        },

        async updateCart(id?: number) {
            const logged = !!localStorage.getItem('auth');

            if (!logged) {
                this.content = [];
                localStorage.setItem('cart-elements', JSON.stringify(this.content));
            }
            else {
                const cartElements = await cartAPI.getAllCartElements(id);
                this.content = cartElements.data;
                localStorage.setItem('cart-elements', JSON.stringify(this.content));
            }

            // this.updateCartSize();
        },

        // updateCartSize() {
        //     this.count = this.content.length;
        // }
    }
});
