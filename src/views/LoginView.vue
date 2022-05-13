<template>
    <div class="login-page">
        <login-component />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import LoginComponent from "@/components/LoginComponent.vue";
    export default defineComponent({
        name: 'LoginView',
        components: {
            LoginComponent
        }
    });
</script>
