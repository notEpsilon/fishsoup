<template>
    <div class="dashboard">
        <h1>Welcome {{ user?.name }}</h1>
    </div>
</template>

<script lang="ts">
    import { useUserState } from "@/stores/user-state";
    import { storeToRefs } from "pinia";
    import { defineComponent } from "vue";
    export default defineComponent({
        name: 'DashboardView',
        setup() {
            const userState = useUserState();
            const { user } = storeToRefs(userState);
            return {
                user
            }
        }
    });
</script>
