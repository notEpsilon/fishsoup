<template>
    <div class="max-w-sm w-full lg:max-w-full rounded-md lg:flex shadow">
        <div class="w-full border-r border-b border-l lg:border-l-0 lg:border-t bg-white rounded-md p-4 lg:px-10 flex flex-col justify-between leading-normal">
            <div class="mb-8 flex justify-between">
                <div>
                    <div class="text-gray-900 font-bold text-xl mb-2">{{ activityWorker?.name }}</div>
                    <p :class="`text-gray-700 text-base`">{{ act.description }}</p>
                </div>
                <button @click="delActivity" class="rounded-md py-2 w-32 lg:w-36 bg--500 h-[2.32rem] bg-rose-600 hover:bg-rose-500 text-white align-middle text-center text-sm">
                    <span class="flex items-center justify-center">
                        <span class="ml-[0.2rem] mr-1">Remove</span>
                    </span>
                </button>
            </div>
            <div class="flex items-center justify-between">
                <div class="text-sm">
                    <p class="text-gray-600">Ordered on: {{  new Date(act.created_at || '').toDateString() }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, onMounted, PropType, ref } from "vue";
    import type IActivity from "@/types/activity";
    import userAPI from "@/api/user";
    import IUser from "@/types/User";

    interface ExtendedActivity extends IActivity { created_at?: Date | string }

    export default defineComponent({
        name: 'RenderActivity',
        props: {
            act: {
                required: true,
                type: Object as PropType<ExtendedActivity>
            }
        },
        methods: {
            delActivity() {
                const ok = window.confirm('Are You Sure ?');
                if (!ok) return;
                this.$emit('delete-activity');
            }
        },
        setup(props) {
            const activityWorker = ref<IUser>();

            onMounted(() => {
                userAPI.getUserById(props.act.user_id).then(res => {
                    activityWorker.value = res.data;
                }).catch(err => console.log(err));
            });

            return {
                activityWorker
            };
        }
    });
</script>
