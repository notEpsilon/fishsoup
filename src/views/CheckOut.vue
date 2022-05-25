<template>
    <div class="customer-dashboard">
        <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="flex items-center justify-between text-3xl font-bold text-gray-900"><span>Dashboard</span> <span class="text-base">Dashboard > {{ route.path.substring(1, route.path.length) }}</span></h1>
            </div>
        </header>
        <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div class="flex flex-col justify-center items-center space-y-4">
                <render-checkout v-for="(cartElement, idx) in cartElements" :elem="cartElement" :key="idx" />
            </div>
        </div>
        </main>
    </div>
</template>

<script lang="ts">
    import { defineComponent, onMounted, ref } from "vue"
    import RenderCheckout from "@/components/RenderCheckout.vue";
    import CartElement from "@/types/CartElement";
    import cartAPI from "@/api/cart";
    import { useRoute } from "vue-router";

    export default defineComponent({
        name: 'CheckOut',
        setup() {
            const cartElements = ref<CartElement[]>([]);

            const route = useRoute();

            onMounted(() => {
                cartAPI.getAllCartElements().then(res => {
                    cartElements.value = res.data;
                });
            });

            return {
                cartElements,
                route
            }
        },
        components: {
            RenderCheckout
        }
    });
</script>
