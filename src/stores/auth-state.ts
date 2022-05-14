import { defineStore, _GettersTree } from "pinia";

interface State { loggedIn: boolean }
interface Getters extends _GettersTree<State> { isLoggedIn: (state: State) => boolean; }

export const useAuthState = defineStore<string, State, Getters>("auth-state", {
    state: () => ({
        loggedIn: !!localStorage.getItem("auth")
    }),

    getters: {
        isLoggedIn: state => state.loggedIn
    },

    actions: {
        login() {
            this.loggedIn = true;
        },

        logout() {
            this.loggedIn = false;
        }
    }
});
