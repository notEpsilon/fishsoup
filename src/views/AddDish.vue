<template>
    <div>
        <div class="max-w-7xl mx-auto mt-10 px-4 sm:mt-0 sm:p-4 sm:pt-24">
            <div class="md:grid md:grid-cols-1 md:gap-6">
                <div class="flex items-center justify-between md:col-span-1">
                    <div class="px-4 sm:px-0">
                        <h3 class="text-3xl mb-3 font-medium leading-6 text-gray-900">Dish Information</h3>
                        <p class="mt-1 text-sm text-gray-600">Enter New Dish Information</p>
                    </div>
                    <span class="text-base">Dashboard > Add / Modify Dish</span>
                </div>
                <div class="mt-5 md:mt-0 md:col-span-2">
                    <form @submit.prevent="addDish" method="POST">
                        <div class="shadow border-t-[0.1px] overflow-hidden sm:rounded-md">
                            <div class="px-4 py-5 bg-white sm:p-6">
                                <div class="grid grid-cols-6 gap-6">
                                    <div class="col-span-6">
                                        <span v-if="Object.keys(errors).length !== 0 && errors.name && errors.name.length !== 0" class="text-red-500">{{ errors.name[0] }}</span>
                                        <label for="name" class="block text-sm font-medium text-gray-700">Dish Name</label>
                                        <input v-model="name" type="text" name="name" id="name" required autocomplete="dish-name" :class="`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md`" />
                                    </div>

                                    <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <span v-if="Object.keys(errors).length !== 0 && errors.image_link && errors.image_link.length !== 0" class="text-red-500">{{ errors.image_link[0] }}</span>
                                        <label for="link" class="block text-sm font-medium text-gray-700">Product Image Link</label>
                                        <input v-model="image_link" type="text" name="link" id="link" autocomplete="link1" required class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <span v-if="Object.keys(errors).length !== 0 && errors.price && errors.price.length !== 0" class="text-red-500">{{ errors.price[0] }}</span>
                                        <label for="price" class="block text-sm font-medium text-gray-700">Price (2 decimal places at most, ex: 10.85)</label>
                                        <input v-model="price" type="number" step="0.01" name="price" id="price" required autocomplete="price1" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <span v-if="Object.keys(errors).length !== 0 && errors.amount && errors.amount.length !== 0" class="text-red-500">{{ errors.amount[0] }}</span>
                                        <label for="amount" class="block text-sm font-medium text-gray-700">Amount</label>
                                        <input v-model="amount" type="number" name="amount" id="amount" required autocomplete="amount1" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                </div>
                            </div>
                            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add Dish</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, reactive, toRefs, ref } from "vue";
    import dishAPI from "@/api/dish";

    export default defineComponent({
        name: 'AddDish',

        setup() {
            const formInfo = reactive<{ name: string, image_link: string, price: number, amount: number }>({
                name: '',
                image_link: '',
                price: 0,
                amount: 0
            });

            let errors = ref<Record<string, string[]>>({});

            return {
                ...toRefs(formInfo),
                errors
            }
        },

        methods: {
            addDish() {
                dishAPI.addDish({
                    name: this.name,
                    image_link: this.image_link,
                    price: this.price,
                    amount: this.amount
                })
                .then(() => {
                    this.name = '';
                    this.image_link = '';
                    this.price = 0;
                    this.amount = 0;
                    alert('Dish Added Successfully');
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
