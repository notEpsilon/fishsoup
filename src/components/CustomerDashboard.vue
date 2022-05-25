<template>
    <div class="customer-dashboard">
        <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="flex items-center justify-between text-3xl font-bold text-gray-900"><span>Welcome {{ user?.name }}, Dashboard</span> <span class="text-base">{{ route.path.substring(1, route.path.length) }}</span></h1>
            </div>
        </header>
        <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div class="flex flex-col justify-center items-center space-y-4">
                <render-order v-for="order in userOrders" :ord="order" @remove-item="deleteItem(order.id)" :key="order.id" />
            </div>
        </div>
        </main>
    </div>
</template>

<script lang="ts">
    import Order from "@/types/Order";
    import { defineComponent, onMounted, ref } from "vue";
    import orderAPI from "@/api/order";
    import { useUserState } from "@/stores/user-state";
    import { storeToRefs } from "pinia";
    import RenderOrder from "@/components/RenderOrder.vue";
    import { useRoute } from "vue-router";

    export default defineComponent({
        name: 'CustomerDashboard',
        setup() {
            const userOrders = ref<Order[]>([]);
            const currUser = useUserState();
            const { user } = storeToRefs(currUser);

            const route = useRoute();

            onMounted(() => {
                orderAPI.getAllOrders(user.value?.id)
                        .then(orders => {
                            userOrders.value = orders.data;
                        })
                        .catch(err => console.log(err));
            });

            return {
                userOrders,
                user,
                route
            }
        },
        components: {
            RenderOrder
        },
        methods: {
            deleteItem(id?: number) {
                orderAPI.deleteOrder(id);
                orderAPI.getAllOrders(this.user?.id)
                        .then(orders => {
                            this.userOrders = orders.data;
                        });
            }
        }
    });
</script>
