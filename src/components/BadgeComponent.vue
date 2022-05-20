<template>
    <div
        class="text-sm rounded-full w-32 lg:w-36 py-2 text-center align-middle"
        :class="done ? 'bg-purple-700 text-white' : 'bg-teal-400'"
    >
        {{ text }}
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({
        name: 'BadgeComponent',
        props: {
            text: {
                required: true,
                type: String
            },
            paddingX: {
                required: false,
                type: String
            },
            paddingY: {
                required: false,
                type: String
            },
            color: {
                required: false,
                type: String
            },
            level: {
                required: false,
                type: String
            },
            done: {
                required: true,
                type: Boolean
            }
        }
    });
</script>
