<template>
    <div class="register-page">
        <register-component />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import RegisterComponent from "@/components/RegisterComponent.vue";
    export default defineComponent({
        name: 'RegisterView',
        components: {
            RegisterComponent
        }
    });
</script>
