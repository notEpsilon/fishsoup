<template>
    <div class="bg-white">
        <div class="max-w-2xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Available Dishes</h2>

            <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                <div v-for="product in products" :key="product.id" class="group relative">
                    <render-store-item v-if="product.amount > 0" :item="product" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, onMounted, ref } from "vue";
    import RenderStoreItem from "@/components/RenderStoreItem.vue";
    import IProduct from "@/types/Product";
    import Product from "@/api/product";

    export default defineComponent({
        name: 'StoreView',
        setup() {
            const products = ref<IProduct[]>([]);

            onMounted(() => {
                Product.getAllProducts()
                       .then(res => products.value = res.data)
                       .catch(err => console.log(err));
            });

            return {
                products
            }
        },
        components: {
            RenderStoreItem
        }
    });
</script>
