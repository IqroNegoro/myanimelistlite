<template>
    <NuxtLink :to="`/anime/${recommendations.mal_id}`" class="w-64 flex flex-col" draggable="false" @click="e => e.preventDefault()">
        <img :src="recommendations.images.webp.large_image_url" alt="" class="w-full h-full rounded-sm" draggable="false" loading="lazy">
        <h1 class="text-lg truncate mx-1">{{recommendations.title}}</h1>
    </NuxtLink>
</template>
<script setup>
defineProps(["recommendations"])
</script>