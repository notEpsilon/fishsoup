<template>
    <div class="home-page">
        <div v-if="currentUser">
            <h1>{{ JSON.stringify(currentUser) }}</h1>
        </div>
    </div>
</template>

<script lang="ts">
    import IUser from "@/types/User";
    import { defineComponent, onMounted, ref } from "vue";
    import User from "@/api/user";
    export default defineComponent({
        name: 'HomeView',
        setup() {
            let currentUser = ref<IUser>();

            onMounted(async () => {
                User.getCurrentUser().then(user => {
                    currentUser.value = user.data;
                }).catch(err => {
                    console.log(err);
                });
            });

            return {
                currentUser
            };
        }
    });
</script>
