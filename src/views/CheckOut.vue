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
                    <render-checkout v-for="(cartElement, idx) in cartElements" :elem="cartElement" :key="idx" @add-one="addOne(idx)" @sub-one="subOne(idx)" />
                    <router-link to="/finalize" class="lg:self-end bg-indigo-600 text-white rounded hover:bg-indigo-500 px-6 py-2">Next</router-link>
                </div>
            </div>
        </main>
    </div>
</template>

<script lang="ts">
    import { storeToRefs } from "pinia";
    import { useRoute } from "vue-router";
    import Product from "@/types/Product";
    import productAPI from "@/api/product";
    import useCartState from "@/stores/cart-state";
    import { defineComponent, onMounted, ref } from "vue";
    import RenderCheckout from "@/components/RenderCheckout.vue";

    interface Extended { quant: number }

    export default defineComponent({
        name: 'CheckOut',
        setup() {
            const cartElements = ref<Array<Product & Extended>>([]);

            const route = useRoute();

            const cartState = useCartState();
            const { content } = storeToRefs(cartState);

            onMounted(() => {
                content.value.forEach(async cartElem => {
                    const prod = (await productAPI.getSingleProduct(cartElem.product_id)).data;
                    cartElements.value = [ ...cartElements.value, { ...prod, quant: cartElem.quantity } ];
                    localStorage.setItem('finalize-products', JSON.stringify(cartElements.value.length === 0 ? [] : cartElements.value));
                });
            });

            return {
                cartElements,
                route
            }
        },
        components: {
            RenderCheckout
        },
        methods: {
            async addOne(idx: number) {
                const pid = this.cartElements[idx].id;
                const prd = (await productAPI.getSingleProduct(pid)).data as Product;
                if (this.cartElements[idx].quant < prd.amount) {
                    this.cartElements[idx].quant += 1;
                    localStorage.setItem('finalize-products', JSON.stringify(this.cartElements));
                } else { return; }
            },

            subOne(idx: number) {
                if (this.cartElements[idx].quant <= 1) return;
                this.cartElements[idx].quant -= 1;
                localStorage.setItem('finalize-products', JSON.stringify(this.cartElements));
            }
        }
    });
</script>
