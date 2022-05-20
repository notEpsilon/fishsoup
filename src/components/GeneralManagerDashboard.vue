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
                <!-- <render-order v-for="order in userOrders" :ord="order" @remove-item="deleteItem(order.id)" :key="order.id" /> -->
            </div>
            <!-- /End replace -->
        </div>
        </main>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    export default defineComponent({
        name: 'GeneralManagerDashboard',

        // onMounted(() => {});


    });
</script>
