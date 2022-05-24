import { defineStore, _GettersTree } from "pinia";
import Navlink from "@/types/Navlink";
import User from "@/types/User";

interface State { loggedInNavLinks: Navlink[]; }
interface Getters extends _GettersTree<State> { getLinks: (state: State) => Navlink[]; }

export const useNavlinksState = defineStore<string, State, Getters>('navlinks-state', {
    state: () => {
        const currentLinks: Navlink[] = [];

        const user = localStorage.getItem('user');
        const actualUser = user ? <User>JSON.parse(user) : null;

        if (actualUser) {
            const type = actualUser.type;

            if (type === 0) {
                currentLinks.push({ name: 'Store', href: '/store' });
            }
            else if (type === 2) {
                currentLinks.push({ name: 'Add Dish', href: '/dish' });
            }
        }

        return {
            loggedInNavLinks: currentLinks
        }
    },
    getters: {
        getLinks(state) {
            return state.loggedInNavLinks;
        }
    },
    actions: {
        setLinks(newLinks: Navlink[]) {
            this.loggedInNavLinks = newLinks;
        }
    }
});
