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
                <render-order v-for="order in allOrders" :ord="order" @mark-as-done="markOrder(order.id)" :worker="true" :key="order.id" />
            </div>
            <!-- /End replace -->
        </div>
        </main>
    </div>
</template>

<script lang="ts">
    import { defineComponent, onMounted, ref } from "vue";
    import orderAPI from "@/api/order";
    import Order from "@/types/Order";
    import RenderOrder from "./RenderOrder.vue";

    export default defineComponent({
        name: 'WorkerDashboard',
        setup() {
            const allOrders = ref<Order[]>([]);

            onMounted(() => {
                orderAPI.getFullOrders().then(res => {
                    allOrders.value = res.data;
                })
                .catch(err => console.log(err));
            });

            return {
                allOrders
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
            }
        }
    });
</script>
