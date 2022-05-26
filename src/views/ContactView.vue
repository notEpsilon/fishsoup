<template>
    <div class="customer-dashboard">
        <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="flex items-cetner justify-between text-3xl font-bold text-gray-900">Contact</h1>
            </div>
        </header>
        <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 space-y-3">
            <p>Emai: <a href="#">contact@email.com</a></p>
            <p>Facebook: <a href="#">facebook.com/FoodRes</a></p>
            <p>Company: <a href="#">contact@fishsoupfrontend.com</a></p>
        </div>
        </main>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({
        name: 'ContactView'
    });
</script>