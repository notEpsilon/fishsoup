<template>
    <div class="max-w-sm w-full lg:max-w-full lg:flex shadow">
        <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" :style="{ backgroundImage: `url(${elem.image_link})` }"></div>
        <div class="w-full border-r border-b border-l lg:border-l-0 lg:border-t bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8 flex justify-between">
                <p class="text-md">{{ elem.name }}</p>
            </div>
            <div class="flex items-center justify-between">
                <div class="text-sm text-gray-600">Quantity: {{ elem.quant }}</div>
                <div class="space-x-4">
                    <button :disabled="maxAmount ? elem.quant >= maxAmount : true" :class="elem.quant >= (maxAmount || -9999) ? 'bg-gray-300 opacity-60' : 'hover:bg-teal-500'" @click="increment" class="bg-teal-400 rounded px-4 py-1 text-sm">Add One</button>
                    <button :disabled="elem.quant <= 1" :class="elem.quant <= 1 ? 'bg-gray-300 opacity-60' : 'hover:bg-red-400'" @click="decrement" class="bg-red-300 rounded px-4 py-1 text-sm">Remove One</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, onMounted, PropType, ref } from "vue";
    import Product from "@/types/Product";
    import productAPI from "@/api/product";

    interface Extended { quant: number }

    export default defineComponent({
        name: 'RenderOrder',
        props: {
            elem: {
                required: true,
                type: Object as PropType<Product & Extended>
            },
            worker: {
                required: false,
                type: Boolean
            }
        },
        setup(props) {
            const maxAmount = ref<number>();

            onMounted(() => {
                productAPI.getSingleProduct(props.elem.id).then(res => {
                    maxAmount.value = (res.data as Product).amount;
                }).catch(err => console.log(err));
            });

            return {
                maxAmount
            };
        },
        methods: {
            increment() {
                this.$emit('add-one');
            },

            decrement() {
                this.$emit('sub-one');
            }
        }
    });
</script>
