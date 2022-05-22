<template>
    <div class="max-w-sm w-full lg:max-w-full lg:flex shadow">
        <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" :style="{ backgroundImage: `url(${product?.image_link})` }"></div>
        <div class="w-full border-r border-b border-l lg:border-l-0 lg:border-t bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal" :class="ord.status === 0 ? 'border-teal-400 lg:border-teal-400' : 'border-purple-400 lg:border-purple-400'">
            <div class="mb-8 flex justify-between">
                <div>
                    <p class="text-sm text-gray-600 flex items-center">
                        <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                        </svg>
                        Order Submitted
                    </p>
                    <div class="text-gray-900 font-bold text-xl mb-2">{{ product?.name }}</div>
                    <p :class="`text-gray-700 text-base ${!ord.street_address && 'text-red-400'}`">{{ ord.street_address ? ord.street_address : "No Address Provided" }}</p>
                </div>
                <button v-if="ord.status === 1" @click="removeItem" class="rounded-md py-2 w-32 lg:w-36 bg--500 h-[2.32rem] bg-rose-600 text-white align-middle text-center text-sm" :class="worker ? 'bg-rose-400' : ''" :disabled="worker">
                    <span class="flex items-center justify-center">
                        <x-icon class="h-5" />
                        <span class="ml-[0.2rem] mr-1">Remove</span>
                    </span>
                </button>
                <button v-if="worker && ord.status !== 1" @click="markAsDone" class="rounded-md py-2 w-32 lg:w-36 bg--500 h-[2.32rem] bg-rose-600 hover:bg-rose-500 text-white align-middle text-center text-sm">
                    Mark as Done
                </button>
            </div>
            <div class="flex items-center justify-between">
                <div class="text-sm">
                    <p class="text-gray-900 leading-none">Ordered by: {{ user?.name }}</p>
                    <p class="text-gray-600">Ordered on: {{  new Date(ord.created_at).toDateString() }}</p>
                </div>
                <badge-component :text="ord.status === 0 ? 'In Progress' : 'Done'" :done="ord.status === 0 ? false : true" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Product from "@/types/Product";
    import productAPI from "@/api/product";
    import { defineComponent, onMounted, ref } from "vue";
    import { useUserState } from "@/stores/user-state";
    import { storeToRefs } from "pinia";
    import BadgeComponent from "./BadgeComponent.vue";
    import { XIcon } from "@heroicons/vue/outline";

    export default defineComponent({
        name: 'RenderOrder',
        props: {
            ord: {
                required: true,
                type: Object
            },
            worker: {
                required: false,
                type: Boolean
            }
        },
        setup(props) {
            const product = ref<Product>();

            const userState = useUserState();
            const { user } = storeToRefs(userState);

            onMounted(() => {
                productAPI.getSingleProduct(props.ord.product_id)
                          .then(res => {
                              product.value = res.data;
                          })
                          .catch(err => console.log(err));
            });

            return {
                product,
                user
            }
        },
        components: {
            BadgeComponent,
            XIcon
        },
        methods: {
            removeItem() {
                this.$emit('remove-item');
            },

            markAsDone() {
                this.$emit('mark-as-done');
            }
        }
    });
</script>
