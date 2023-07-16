<template>
    <NuxtLink :to="`/anime/${season.mal_id}`" class="w-64 flex flex-col" draggable="false" @click="e => e.preventDefault()">
        <img :src="season.images.webp.large_image_url" alt="" class="w-full h-full rounded-sm" draggable="false" loading="lazy">
        <h1 class="text-lg truncate mx-1">{{season.title}}</h1>
        <div class="text-sm text-slate-400">
            <i class="bx bx-star mr-1"></i>
            <span>{{season.favorites}}</span>
        </div>
    </NuxtLink>
</template>
<script setup>
const {season} = defineProps(["season"])
</script>