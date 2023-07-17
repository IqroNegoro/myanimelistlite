<template>
    <NuxtLink :to="`/anime/${top.mal_id}`" class="w-64 flex flex-col" draggable="false" event="">
        <img :src="top.images.webp.large_image_url" alt="" class="w-full h-full rounded-sm" draggable="false" loading="lazy">
        <h1 class="text-lg truncate mx-1">{{top.title}}</h1>
    </NuxtLink>
</template>
<script setup>
const {top} = defineProps(["top"])
</script>