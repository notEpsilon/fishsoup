<template>
    <div class="dashboard">
        <div v-if="user?.type === 0">
            <customer-dashboard />
        </div>
        <div v-else-if="user?.type === 1">
            <worker-dashboard />
        </div>
        <div v-else-if="user?.type === 2">
            <department-manager-dashboard />
        </div>
        <div v-else-if="user?.type === 3">
            <general-manager-dashboard />
        </div>
        <div v-else>
            <pre>Error Occurred: Your Type as a User isn't Recognized.</pre>
        </div>
    </div>
</template>

<script lang="ts">
    import { storeToRefs } from "pinia";
    import { defineComponent } from "vue";
    import { useUserState } from "@/stores/user-state";
    import WorkerDashboard from "@/components/WorkerDashboard.vue";
    import CustomerDashboard from "@/components/CustomerDashboard.vue";
    import GeneralManagerDashboard from "@/components/GeneralManagerDashboard.vue";
    import DepartmentManagerDashboard from "@/components/DepartmentManagerDashboard.vue";

    export default defineComponent({
        name: 'DashboardView',
        setup() {
            const userState = useUserState();
            const { user } = storeToRefs(userState);
            return {
                user
            }
        },
        components: {
            CustomerDashboard,
            WorkerDashboard,
            DepartmentManagerDashboard,
            GeneralManagerDashboard
        }
    });
</script>
