import { defineStore, _GettersTree } from "pinia";
import type User from "@/types/User";

interface State { user: User | null }
interface Getters extends _GettersTree<State> { currentUser: (state: State) => User | null; }

export const useUserState = defineStore<string, State, Getters>("user-state", {
    state: () => ({
        user: null
    }),

    getters: {
        currentUser: state => state.user
    },

    actions: {
        setUser(user: User | null) {
            this.user = user;
        }
    }
});
