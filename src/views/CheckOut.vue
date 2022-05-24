<template>
    <div class="customer-dashboard">
        <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
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

    export default defineComponent({
        name: 'CheckOut',
        setup() {
            const cartElements = ref<CartElement[]>([]);

            onMounted(() => {
                cartAPI.getAllCartElements().then(res => {
                    cartElements.value = res.data;
                });
            });

            return {
                cartElements
            }
        },
        components: {
            RenderCheckout
        }
    });
</script>
