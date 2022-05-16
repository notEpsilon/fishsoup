<template>
  <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <disclosure-button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <menu-icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <x-icon v-else class="block h-6 w-6" aria-hidden="true" />
          </disclosure-button>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between"> <!-- sm:justify-start -->
          <div class="flex-shrink-0 flex items-center">
            <router-link to="/"><img class="block h-8 w-auto" src="@/assets/logo.svg" alt="Fishsoup" /></router-link>
          </div>
          <div class="hidden sm:block sm:ml-6 sm:pt-1">
            <div class="flex space-x-4">
              <router-link v-for="item in navigation" :key="item.name" :to="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</router-link>
              <span v-if="!loggedIn" class="">
                <router-link v-for="item in notLoggedInLinks" :key="item.name" :to="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</router-link>
              </span>
              <form v-if="loggedIn" method="POST" @submit.prevent="logout">
                <button type="submit" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Logout</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <disclosure-panel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <disclosure-button v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</disclosure-button>
        <span v-if="!loggedIn">
          <disclosure-button v-for="item in notLoggedInLinks" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</disclosure-button>
        </span>
        <form v-if="loggedIn" method="POST" @submit.prevent="logout" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
          <button type="submit" class="w-full h-full text-left">Logout</button>
        </form>
      </div>
    </disclosure-panel>
  </Disclosure>
</template>

<script lang="ts">
    import { defineComponent, ref } from "@vue/runtime-core";
    import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
    import { MenuIcon, XIcon } from "@heroicons/vue/outline";
    import type Navlink from "@/types/Navlink";
    import User from "@/api/user";
    import router from "@/router/index";
    import { useAuthState } from "@/stores/auth-state";
    import { useUserState } from "@/stores/user-state";
    import { storeToRefs } from "pinia";

    export default defineComponent({
        setup() {
            const notLoggedInLinks = ref<Navlink[]>([
              { name: 'Login', href: '/login', current: false },
              { name: 'Register', href: '/register', current: false }
            ]);

            const navigation = ref<Navlink[]>([
                // { name: 'Dashboard', href: '/', current: true },
                // { name: 'Login', href: '/login', current: false },
                // { name: 'Register', href: '/register', current: false }
                // { name: 'Calendar', href: '#', current: false },
            ]);

            const authState = useAuthState();
            const { loggedIn } = storeToRefs(authState);

            const userState = useUserState();
            const { user } = storeToRefs(userState);

            return {
                navigation,
                loggedIn,
                authState,
                userState,
                user,
                notLoggedInLinks
            };
        },
        methods: {
          async logout() {
            await User.logout();
            localStorage.removeItem('auth');
            this.authState.$patch({ loggedIn: false });
            this.userState.setUser(null);
            router.push({ name: 'login' });
          }
        },
        components: {
            Disclosure,
            DisclosureButton,
            DisclosurePanel,
            MenuIcon,
            XIcon
        }
    });
</script>
