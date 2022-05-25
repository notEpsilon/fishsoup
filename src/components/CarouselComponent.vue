<template>
    <!-- <div class=""> -->
        <Swiper class="rounded-md h-[20rem] -mt-20 w-[27rem] flex items-center justify-center" :slides-per-view="1" :space-between="30">
            <swiper-slide v-for="(img_link, idx) in imgs" :key="idx" class="w-full flex justify-center rounded-md h-full">
                <img :src="img_link" alt="home_page_slide" class="h-full w-full object-cover rounded-md" />
            </swiper-slide>
        </Swiper>
    <!-- </div> -->
</template>

<script lang="ts">
    import { defineComponent, PropType } from "vue";
    import { Swiper, SwiperSlide } from "swiper/vue";
    import 'swiper/css';

    export default defineComponent({
        name: 'CarouselComponent',
        props: {
            imgs: {
                required: true,
                type: Array as PropType<string[]>
            }
        },
        components: {
            Swiper,
            SwiperSlide
        }
    });
</script>
<!--
    <Swiper :slide-per-view="3" :space-between="50" class="bg-red-500 pt-20">
        <swiper-slide class="bg-teal-400" v-for="(img, idx) in imgs" :key="idx">
            <img class="h-full max-h-full max-w-full object-contain sm:-mt-8 sm:ml-28" :src="img" alt="home_fish_img" />
        </swiper-slide>
    </Swiper>
-->