<template>
  <transition-root as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="cartState.closeCart">
      <transition-child as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </transition-child>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <transition-child as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
              <dialog-panel class="pointer-events-auto w-screen max-w-md">
                <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                    <div class="flex items-start justify-between">
                      <dialog-title class="text-lg font-medium text-gray-900"> Shopping cart </dialog-title>
                      <div class="ml-3 flex h-7 items-center">
                        <button type="button" class="-m-2 p-2 text-gray-400 hover:text-gray-500" @click="cartState.closeCart">
                          <span class="sr-only">Close panel</span>
                          <x-icon class="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div class="mt-8">
                      <div class="flow-root">
                        <ul role="list" class="-my-6 divide-y divide-gray-200">
                          <li v-for="(product, idx) in products" :key="idx" class="flex py-6">
                            <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center" />
                            </div>

                            <div class="ml-4 flex flex-1 flex-col">
                              <div>
                                <div class="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <p> {{ product.name }} </p>
                                  </h3>
                                  <p class="ml-4">{{ product.price }}$</p>
                                </div>
                                <p class="mt-1 text-sm text-gray-500">{{ product.desc }}</p>
                              </div>
                              <div class="flex flex-1 items-end justify-between text-sm">
                                <p class="text-gray-500">Qty {{ product.quantity }}</p>

                                <div class="flex">
                                  <button @click="remItem(product.id)" type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div class="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>total: {{ products.reduce((prev, curr) => prev + curr.price, 0) }}$</p>
                    </div>
                    <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div class="mt-6">
                      <router-link to="/checkout" class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</router-link>
                    </div>
                    <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        or <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500" @click="cartState.closeCart">Continue Shopping<span aria-hidden="true"> &rarr;</span></button>
                      </p>
                    </div>
                  </div>
                </div>
              </dialog-panel>
            </transition-child>
          </div>
        </div>
      </div>
    </Dialog>
  </transition-root>
</template>

<script lang="ts">
    import { defineComponent, onMounted, ref } from "vue";
    import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from "@headlessui/vue";
    import { XIcon } from "@heroicons/vue/outline";
    import useCartState from "@/stores/cart-state";
    import { storeToRefs } from "pinia";
    import type ICartProduct from "@/types/CartProduct";
    import cartAPI from "@/api/cart";
    import type ICartElement from "@/types/CartElement";
    import productAPI from "@/api/product";
    import Product from "@/types/Product";

    export default defineComponent({
        name: 'ShoppingCart',
        setup() {
            const cartState = useCartState();
            const { open } = storeToRefs(cartState);

            const productsBefore = ref<ICartElement[]>([]);
            const products = ref<ICartProduct[]>([]);

            onMounted(() => {
              cartAPI.getAllCartElements().then(res => {
                productsBefore.value = res.data;
                const prds: ICartProduct[] = [];
                (res.data as Array<ICartElement>).forEach(async cartElem => {
                  const quant = cartElem.quantity;
                  const assocProduct = (await productAPI.getSingleProduct(cartElem.product_id)).data as Product;
                  prds.push({
                    id: cartElem.id,
                    name: assocProduct.name,
                    quantity: quant,
                    desc: 'Seafood',
                    price: assocProduct.price * quant,
                    imageSrc: assocProduct.image_link,
                    imageAlt: 'product_image'
                  });
                });
                products.value = prds;
              }).catch(err => console.log(err));
            });

            return {
                open,
                products,
                cartState
            };
        },
        components: {
            Dialog,
            DialogPanel,
            DialogTitle,
            TransitionChild,
            TransitionRoot,
            XIcon
        },
        methods: {
          remItem(id?: number) {
            cartAPI.removeItem(id).then(async () => {
              localStorage.setItem('cart-size', (parseInt(localStorage.getItem('cart-size') || '0') - 1).toString());
              cartAPI.getAllCartElements().then(res => {
                const prds: ICartProduct[] = [];
                (res.data as Array<ICartElement>).forEach(async cartElem => {
                  const quant = cartElem.quantity;
                  const assocProduct = (await productAPI.getSingleProduct(cartElem.product_id)).data as Product;
                  prds.push({
                    name: assocProduct.name,
                    quantity: quant,
                    desc: 'Seafood',
                    price: assocProduct.price * quant,
                    imageSrc: assocProduct.image_link,
                    imageAlt: 'product_image'
                  });
                });
                this.products = prds;
              }).catch(err => console.log(err));
            }).catch(err => console.log(err));
          }
        }
    });
</script>
