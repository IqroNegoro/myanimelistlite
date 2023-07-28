<template>
    <NuxtLink :to="`/anime/${anime.mal_id}`" class="relative" draggable="false" @click="e => e.preventDefault()">
        <img :src="anime.images?.webp?.large_image_url" alt="" class="w-full h-full object-cover rounded-sm" draggable="false" loading="lazy">
        <div class="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-b from-transparent to-black flex justify-end flex-col p-1">
            <h1 class="truncate overflow-hidden text-lg font-semibold">{{anime.title}}</h1>
            <p class="truncate">Episode {{anime.episodes ?? 'N/A'}} &bull; {{anime.type}} &bull; {{capitalizeFirst(anime.season)}}</p>
        </div>
    </NuxtLink>
</template>
<script setup>
const { anime } = defineProps(["anime"])
</script>