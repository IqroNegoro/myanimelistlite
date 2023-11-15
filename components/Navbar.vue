<template>
    <div class="w-full h-16 flex justify-between items-center bg-dark-primary px-4 shadow">
        <NuxtLink :to="{name: 'index'}" class="text-white">
            <h1>Mallite</h1>
        </NuxtLink>
        <button class="text-white" @click="searchStatus = true">
            <i class="bx bx-search text-2xl"></i>
        </button>
    </div>
</template>
<script setup>
const searchStatus = useSearch();
</script>