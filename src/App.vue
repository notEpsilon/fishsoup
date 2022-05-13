<template>
  <navigation-component />
  <router-view />
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import NavigationComponent from "@/components/NavigationComponent.vue";
  export default defineComponent({
    name: 'App',
    components: {
      NavigationComponent
    }
  });
</script>
