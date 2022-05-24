<template>
  <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <img class="mx-auto h-12 w-auto" src="@/assets/logo.svg" alt="Fishsoup" />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up a new account</h2>
      </div>
      <form @submit.prevent="register" class="mt-8 space-y-6" method="POST">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="name" class="sr-only">Name</label>
            <input v-model="name" id="name" name="name" type="text" autocomplete="name" required="true" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Name" />
          </div>
          <span v-if="Object.keys(errors).length !== 0 && errors.name && errors.name.length !== 0" class="text-red-500">{{ errors.name[0] }}</span>
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input v-model="email" id="email-address" name="email" type="email" autocomplete="email" required="true" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
          </div>
          <span v-if="Object.keys(errors).length !== 0 && errors.email && errors.email.length !== 0" class="text-red-500">{{ errors.email[0] }}</span>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input v-model="password" id="password" name="password" type="password" autocomplete="current-password" required="true" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
          </div>
          <span v-if="Object.keys(errors).length !== 0 && errors.password && errors.password.length !== 0" class="text-red-500">{{ errors.password[0] }}</span>
          <div>
            <label for="password_confirmation" class="sr-only">Password</label>
            <input v-model="password_confirmation" id="password_confirmation" name="password_confirmation" type="password" autocomplete="password_confirmation" required="true" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Confirm Password" />
          </div>
          <span v-if="Object.keys(errors).length !== 0 && errors.password_confirmation && errors.password_confirmation.length !== 0" class="text-red-500">{{ errors.password_confirmation[0] }}</span>
        </div>

        <div class="flex items-center justify-between">
          <div class="text-sm">
            <router-link to="/login" class="font-medium text-indigo-600 hover:text-indigo-500"> Already Registered? </router-link>
          </div>
        </div>

        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
            </span>
            Sign up
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
    import { defineComponent, reactive, ref, toRefs } from "vue";
    import { LockClosedIcon } from "@heroicons/vue/solid";
    import type RegsiterFormInfo from "@/types/RegisterFormInfo";
    import User from "@/api/user";
    import router from "@/router/index";
    export default defineComponent({
        name: 'RegisterComponent',
        components: {
            LockClosedIcon
        },
        setup() {
          let formInfo = reactive<RegsiterFormInfo>({
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
          });
          let errors = ref<Record<string, string[]>>({});
          return {
            ...toRefs(formInfo),
            errors
          }
        },
        methods: {
          register() {
            User.register({
              name: this.name,
              email: this.email,
              password: this.password,
              password_confirmation: this.password_confirmation
            }).then(() => router.push({ name: 'login' }))
              .catch(err => {
                if (err.response.status === 422) {
                  this.errors = err.response.data.errors
                }
            });
          }
        }
    });
</script>
