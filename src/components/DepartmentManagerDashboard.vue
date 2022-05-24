<template>
    <div class="customer-dashboard">
        <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold text-gray-900">Worker Activity</h1>
            </div>
        </header>
        <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div class="flex flex-col justify-center items-center space-y-4">
                <render-activity v-for="activity in activities" :act="activity" @delete-activity="delAct(activity.id)" :key="activity.id" />
            </div>
        </div>
        </main>
    </div>
</template>

<script lang="ts">
    import { defineComponent, onMounted, ref } from "vue";
    import activityAPI from "@/api/activity";
    import RenderActivity from "./RenderActivity.vue";
    import type IActivity from "@/types/activity";

    export default defineComponent({
        name: 'DepartmentManagerDashboard',
        setup() {
            const activities = ref<IActivity[]>([]);

            onMounted(() => {
                activityAPI.getAllActivites()
                           .then(acts => {
                               activities.value = acts.data;
                           })
                           .catch(err => console.log(err));
            });

            return {
                activities
            };
        },
        methods: {
            delAct(id?: number) {
                activityAPI.deleteActivity(id).then(async () => {
                    this.activities = (await activityAPI.getAllActivites()).data;
                })
                .catch(err => console.log(err));
            }
        },
        components: {
            RenderActivity
        }
    });
</script>
