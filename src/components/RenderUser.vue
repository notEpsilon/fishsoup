<template>
    <div class="max-w-sm w-full lg:max-w-full lg:flex shadow">
        <div class="w-full border-r border-b border-l lg:border-l-0 lg:border-t bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col lg:flex-row space-y-7 items-center lg:space-y-0 justify-between leading-normal">
            <p><span :class="colorMapping[user.type || 0]">{{ typeMapping[user.type || 0] }}</span>: {{ user.email }}</p>
            <button v-if="(user.type || 0) < 3" @click="promote((user.type || 0) + 1)" class="bg-blue-200 rounded-md px-4 py-2">Promote to {{ typeMapping[(user.type || 0) + 1] }}</button>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, PropType } from "vue";
    import type IUser from "@/types/User";
    import { ArrowUpIcon } from "@heroicons/vue/outline";

    const typeMapping = ['Customer', 'Worker', 'Department Manager', 'General Manager'];
    const colorMapping = ['text-black', 'text-green-500', 'text-sky-500', 'text-purple-500'];

    export default defineComponent({
        name: 'RenderUser',
        props: {
            user: {
                required: true,
                type: Object as PropType<IUser>
            }
        },
        setup() {
            return {
                typeMapping,
                colorMapping,
                ArrowUpIcon
            }
        },
        methods: {
            promote(level: number) {
                this.$emit('promote-event', { id: this.user.id, level });
            }
        }
    });
</script>
