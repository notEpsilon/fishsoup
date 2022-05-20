<template>
    <div>
        <div class="max-w-7xl mx-auto mt-10 px-4 sm:mt-0 sm:p-4 sm:pt-24">
            <div class="md:grid md:grid-cols-1 md:gap-6">
                <div class="md:col-span-1">
                    <div class="px-4 sm:px-0">
                        <h3 class="text-3xl mb-3 font-medium leading-6 text-gray-900">Personal Information</h3>
                        <p class="mt-1 text-sm text-gray-600">We will never share your personal information.</p>
                    </div>
                </div>
                <div class="mt-5 md:mt-0 md:col-span-2">
                    <form @submit.prevent="placeOrder" method="POST">
                        <div class="shadow border-t-[0.1px] overflow-hidden sm:rounded-md">
                            <div class="px-4 py-5 bg-white sm:p-6">
                                <div class="grid grid-cols-6 gap-6">
                                    <div class="col-span-6">
                                        <label for="street_address" class="block text-sm font-medium text-gray-700">Street address</label>
                                        <input v-model="address" type="text" name="street_address" id="street_address" required autocomplete="street-address" :class="`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${checked && 'bg-gray-100'}`" :disabled="checked" />
                                    </div>

                                    <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label for="city" class="block text-sm font-medium text-gray-700">City</label>
                                        <input v-model="city" type="text" name="city" id="city" autocomplete="city1" required class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <span v-if="Object.keys(errors).length !== 0 && errors.phoneNumber && errors.phoneNumber.length !== 0" class="text-red-500">{{ errors.phoneNumber[0] }}</span>
                                        <label for="phone_number" class="block text-sm font-medium text-gray-700">Phone Number</label>
                                        <input v-model="phoneNumber" type="text" name="phone_number" id="phone_number" required autocomplete="phone_number1" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div class="flex items-center sm:justify-end sm:pt-4 col-span-2 sm:col-span-3 lg:col-span-2">
                                        <input @click="address = ''" v-model="checked" id="no_deliver" name="no_deliver" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                        <label for="no_deliver" class="ml-2 block text-sm text-gray-900"> Don't deliver </label>
                                    </div>
                                </div>
                            </div>
                            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Place Order</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, onMounted, ref, reactive, toRefs } from "vue";
    import { useUserState } from "@/stores/user-state";
    import type IOrder from "@/types/OrderFormInfo";
    import type IProduct from "@/types/Product";
    import type OrderInfo from "@/types/Order";
    import { useRoute } from "vue-router";
    import { storeToRefs } from "pinia";
    import Product from "@/api/product";
    import router from "@/router";
    import orderAPI from "@/api/order";

    export default defineComponent({
        name: 'OrderView',
        setup() {
            const route = useRoute();
            const id = parseInt((route.params.id) as string);

            const product = ref<IProduct>();

            const userState = useUserState();
            const { user } = storeToRefs(userState);

            const formInfo =  reactive<IOrder>({
                address: '',
                city: '',
                phoneNumber: '',
                checked: false
            });

            const errors = ref<Record<string, string[]>>({});

            onMounted(() => {
                Product.getSingleProduct(id)
                       .then(prod => {
                           product.value = prod.data;
                       })
                       .catch(err => console.log(err));
            });

            return {
                id,
                product,
                ...toRefs(formInfo),
                userState,
                user,
                errors
            };
        },
        methods: {
            placeOrder() {
                const order: OrderInfo = {
                    userId: this.user?.id,
                    productId: this.product?.id,
                    address: this.address,
                    status: false,
                    phoneNumber: this.phoneNumber,
                    city: this.city
                };

                const ok = window.confirm('Are You Sure You Want to Place This Order ?');

                if (!ok) return;

                orderAPI.createOrder(order)
                        .then(() => {
                            router.push({ name: 'dashboard' });
                        })
                        .catch(err => {
                            if (err.response.status === 422) {
                                this.errors = err.response.data.errors;
                            }
                        });
            }
        }
    });
</script>
