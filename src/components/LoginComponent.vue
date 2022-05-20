<template>
  <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <img class="mx-auto h-12 w-auto" src="@/assets/logo.svg" alt="Fishsoup" />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Or
          {{ ' ' }}
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> start your 14-day free trial </a>
        </p>
      </div>
      <form @submit.prevent="login" class="mt-8 space-y-6" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input v-model="email" id="email-address" name="email" type="email" autocomplete="email" required="true" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
          </div>
          <span v-if="Object.keys(errors).length !== 0 && errors.email && errors.email.length !== 0" class="text-red-500">{{ errors.email[0] }}</span>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input v-model="password" id="password" name="password" type="password" autocomplete="current-password" required="true" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
          </div>
          <span v-if="Object.keys(errors).length !== 0 && errors.password && errors.password.length !== 0" class="text-red-500">{{ errors.password[0] }}</span>
        </div>
        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
            </span>
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
    import { defineComponent, reactive, toRefs, ref } from "vue";
    import { LockClosedIcon } from "@heroicons/vue/solid";
    import type LoginFormInfo from "@/types/LoginFormInfo";
    import User from "@/api/user";
    import router from "@/router/index";
    import { useAuthState } from "@/stores/auth-state";
    import { storeToRefs } from "pinia";
    import { useUserState } from "@/stores/user-state";
import { useNavlinksState } from "@/stores/navlinks-state";
    export default defineComponent({
        name: 'LoginComponent',
        components: {
            LockClosedIcon
        },
        setup() {
          let formInfo = reactive<LoginFormInfo>({
            email: '',
            password: ''
          });

          let errors = ref<Record<string, string[]>>({});
          const authState = useAuthState();
          const userState = useUserState();
          const navigation = useNavlinksState();
          const { user } = storeToRefs(userState);
          const { loggedIn } = storeToRefs(authState);

          return {
            ...toRefs(formInfo),
            errors,
            user,
            userState,
            loggedIn,
            authState,
            navigation
          };
        },
        methods: {
          login() {
            User.login({
              email: this.email,
              password: this.password
            }).then(currUser => {
              this.userState.setUser(currUser ? currUser.data : null);
              this.authState.$patch({ loggedIn: true });
              localStorage.setItem('auth', 'true');
              localStorage.setItem('user', JSON.stringify(currUser.data));
              if (currUser.data.type === 0) {
                this.navigation.setLinks([
                  { name: 'Store', href: '/store' }
                ]);
              }
              router.push({ name: 'dashboard' });
            }).catch(err => {
              if (err.response.status === 422) {
                this.errors = err.response.data.errors;
              }
            });
          }
        }
    });
</script>
