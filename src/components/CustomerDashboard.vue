<template>
    <div class="customer-dashboard">
        <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
            </div>
        </header>
        <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <!-- Replace with your content -->
            <div class="flex flex-col justify-center items-center space-y-4">
                <render-order v-for="order in userOrders" :ord="order" @remove-item="deleteItem(order.id)" :key="order.id" />
            </div>
            <!-- /End replace -->
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

    export default defineComponent({
        name: 'CustomerDashboard',
        setup() {
            const userOrders = ref<Order[]>([]);
            const currUser = useUserState();
            const { user } = storeToRefs(currUser);

            onMounted(() => {
                orderAPI.getAllOrders(user.value?.id)
                        .then(orders => {
                            userOrders.value = orders.data;
                        })
                        .catch(err => console.log(err));
            });

            return {
                userOrders,
                user
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
