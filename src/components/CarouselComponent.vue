<template>
    <!-- <div class=""> -->
        <Swiper :modules="mods" :loop="true" :autoplay="{ delay: 1200, disableOnInteraction: false }" :slides-per-view="1" :space-between="30" :pagination="{ clickable: true }" navigation :scrollbar="{ draggable: true }" class="rounded-md h-[20rem] -mt-20 w-[27rem] flex items-center justify-center">
            <swiper-slide v-for="(img_link, idx) in imgs" :key="idx" class="w-full flex justify-center rounded-md h-full">
                <img :src="img_link" alt="home_page_slide" class="h-full w-full object-cover rounded-md" />
            </swiper-slide>
        </Swiper>
    <!-- </div> -->
</template>

<script lang="ts">
    import { defineComponent, PropType } from "vue";
    import { Swiper, SwiperSlide } from "swiper/vue";
    import { Autoplay, Pagination, Navigation } from "swiper";

    import 'swiper/css';
    import 'swiper/css/autoplay';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/scrollbar';

    export default defineComponent({
        name: 'CarouselComponent',
        props: {
            imgs: {
                required: true,
                type: Array as PropType<string[]>
            }
        },
        setup() {
            return {
                mods: [Autoplay, Pagination, Navigation]
            };
        },
        components: {
            Swiper,
            SwiperSlide
        }
    });
</script>
