<template>
    <div class="max-w-sm w-full lg:max-w-full lg:flex shadow">
        <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" :style="{ backgroundImage: `url(${prod?.image_link})` }"></div>
        <div class="w-full border-r border-b border-l lg:border-l-0 lg:border-t bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8 flex justify-between">
                <p class="text-md">{{ prod?.name }}</p>
            </div>
            <div class="flex items-center justify-between">
                <div class="text-sm text-gray-600">Quantity: {{ elem.quantity }}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, onMounted, PropType, ref } from "vue";
    import CartElement from "@/types/CartElement";
    import Product from "@/types/Product";
    import productAPI from "@/api/product";

    export default defineComponent({
        name: 'RenderOrder',
        props: {
            elem: {
                required: true,
                type: Object as PropType<CartElement>
            },
            worker: {
                required: false,
                type: Boolean
            }
        },
        setup(props) {
            const prod = ref<Product>();

            onMounted(() => {
                productAPI.getSingleProduct(props.elem.id).then(res => {
                    prod.value = res.data;
                }).catch(err => console.log(err));
            });

            return {
                prod
            };
        }
    });
</script>
