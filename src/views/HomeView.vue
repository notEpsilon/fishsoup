<template>
    <div class="home-view h-[648px] sm:h-[657.6px]">
        <div class="max-w-7xl mx-auto h-full w-full sm:px-5">
            <div class="flex flex-col-reverse sm:flex-row w-full h-full">
                <div class="flex-1 text-center pt-4 sm:pt-36 sm:text-left">
                    <h1 class="text-5xl tracking-wide font-extrabold">
                        <span class="text-indigo-600">World-Class</span>
                        Seafood Restaurant
                    </h1>
                    <p class="text-base mt-5 mb-12 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia libero similique minima in ipsum, suscipit dolorum assumenda earum id pariatur reiciendis asperiores, iusto accusantium dolorem.</p>
                    <div class="buttons space-x-4">
                        <router-link to="/register" class="bg-indigo-400 rounded-md shadow px-5 py-3 hover:bg-indigo-500">Get Started</router-link>
                        <a target="_blank" href="https://github.com/notEpsilon/fishsoup" class="text-white bg-slate-900 rounded-md shadow px-10 py-3 hover:bg-gray-800">Github</a>
                    </div>
                </div>
                <div class="flex-1 overflow-hidden flex p-4 sm:ml-8 items-center justify-center">
                    <!-- <img class="h-full max-h-full max-w-full object-contain sm:-mt-8 sm:ml-28" src="@/assets/undraw_fish_bowl_uu88.svg" alt="fish" /> -->
                    <carousel-component :imgs="prods.map(prod => prod.image_link)" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, onMounted, ref } from "vue";
    import CarouselComponent from "@/components/CarouselComponent.vue";
    import productAPI from "@/api/product";
    import IProduct from "@/types/Product";

    export default defineComponent({
        name: 'HomeView',
        setup() {
            const prods = ref<IProduct[]>([]);

            onMounted(async () => {
                try {
                    prods.value = (await productAPI.getAllProducts()).data as Array<IProduct>;
                } catch (err) {
                    console.log(err);
                }
            });

            return {
                prods
            };
        },
        components: {
            CarouselComponent
        }
    });
</script>
