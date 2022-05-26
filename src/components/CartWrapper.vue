<template>
    <div class="cart-wrapper">
        <shopping-cart />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import ShoppingCart from "./ShoppingCart.vue";

    export default defineComponent({
        name: 'CartWrapper',
        components: {
            ShoppingCart
        }
    });
</script>
