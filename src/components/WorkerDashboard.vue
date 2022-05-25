<template>
    <div class="customer-dashboard">
        <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="flex items-center justify-between text-3xl font-bold text-gray-900"><span>Welcome Worker {{ user?.name }}, Dashboard</span> <span class="text-base">{{ route.path.substring(1, route.path.length) }}</span></h1>
            </div>
        </header>
        <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div class="flex flex-col justify-center items-center space-y-4">
                <render-order v-for="order in allOrders" :ord="order" @mark-as-done="markOrder(order.id)" :worker="true" :key="order.id" />
            </div>
        </div>
        </main>
    </div>
</template>

<script lang="ts">
    import { defineComponent, onMounted, ref } from "vue";
    import orderAPI from "@/api/order";
    import Order from "@/types/Order";
    import RenderOrder from "./RenderOrder.vue";
    import activityAPI from "@/api/activity";
    import { useUserState } from "@/stores/user-state";
    import { storeToRefs } from "pinia";
    import { useRoute } from "vue-router";

    export default defineComponent({
        name: 'WorkerDashboard',
        setup() {
            const allOrders = ref<Order[]>([]);
            const userState = useUserState();
            const { user } = storeToRefs(userState);

            const route = useRoute();

            onMounted(() => {
                orderAPI.getFullOrders().then(res => {
                    allOrders.value = res.data;
                })
                .catch(err => console.log(err));
            });

            return {
                allOrders,
                route,
                user
            }
        },
        components: {
            RenderOrder
        },
        methods: {
            markOrder(id?: number) {
                orderAPI.markOrderAsDone(id).then(async () => {
                    this.allOrders = (await orderAPI.getFullOrders()).data;
                }).catch(err => console.log(err));
                activityAPI.addActivity({
                    user_id: this.user?.id,
                    description: 'Marked Order as Done'
                }).catch(err => console.log(err));
            }
        }
    });
</script>
