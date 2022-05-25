<template>
    <div class="customer-dashboard">
        <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="flex items-center justify-between text-3xl font-bold text-gray-900"><span>Welcome General Manager {{ user?.name }}, Dashboard</span> <span class="text-base">{{ route.path.substring(1, route.path.length) }}</span></h1>
            </div>
        </header>
        <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div class="flex flex-col justify-center items-center space-y-4">
                <render-user v-for="user in users" :user="user" @promote-event="promote" :key="user.id" />
            </div>
        </div>
        </main>
    </div>
</template>

<script lang="ts">
    import { defineComponent, onMounted, ref } from "vue";
    import IUser from "@/types/User";
    import RenderUser from "@/components/RenderUser.vue";
    import userAPI from "@/api/user";
    import { useUserState } from "@/stores/user-state";
    import { storeToRefs } from "pinia";
    import { useRoute } from "vue-router";

    export default defineComponent({
        name: 'GeneralManagerDashboard',
        setup() {
            const users = ref<IUser[]>([]);

            const userState = useUserState();
            const { user } = storeToRefs(userState);

            const route = useRoute();

            onMounted(() => {
                userAPI.getAllUsers().then(res => {
                    users.value = res.data;
                })
                .catch(err => {
                    console.log(err);
                });
            });

            return {
                users,
                route,
                user
            }
        },
        components: {
            RenderUser
        },
        methods: {
            promote(payload: { id: number, level: number }) {
                userAPI.promoteUser(payload.id, payload.level)
                .then(async () => {
                    this.users = (await userAPI.getAllUsers()).data;
                })
                .catch(err => console.log(err));
            }
        }
    });
</script>
