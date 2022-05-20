<template>
    <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img :src="item.image_link" :alt="item.name" class="w-full h-full object-center object-cover lg:w-full lg:h-full" />
    </div>
    <div class="mt-4 flex justify-between">
        <div>
            <h3 class="text-sm text-gray-700">
                <router-link :to="`/store/${item.id}`">
                    <span aria-hidden="true" class="absolute inset-0" />
                    {{ item.name }}
                </router-link>
            </h3>
            <p class="mt-1 text-sm text-gray-500">{{ item.amount }} Left</p>
        </div>
        <p class="text-sm font-medium text-gray-900">{{ item.price }}$</p>
    </div>
</template>

<script lang="ts">
    import { defineComponent, PropType } from "vue";
    import type Product from "@/types/Product";
    export default defineComponent({
        name: 'RenderStoreItem',
        props: {
            item: {
                required: true,
                type: Object as PropType<Product>
            }
        }
    });
</script>
