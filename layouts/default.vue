<template>
    <div class="w-full min-h-screen bg-black text-white">
        <Loading v-if="loading" />
        <!-- <Navbar /> -->
        <slot />
    </div>
</template>
<script setup>
const loading = useLoading();
</script>