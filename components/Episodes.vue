<template>
    <NuxtLink :to="`#`" class="w-64 flex flex-col snap-center" draggable="false">
        <div class="relative group/overlay">
            <div class="group/player absolute hidden group-hover/overlay:flex bg-black bg-opacity-50 w-full h-full top-0 left-0 justify-center items-center">
                <i class="bx bx-play text-7xl transition-all duration-150 opacity-0 translate-y-4 group-hover/player:opacity-100 group-hover/player:translate-y-0"></i>
            </div>
            <img v-if="episode.images" :src="episode.images?.jpg.image_url ?? nullImage" :alt="episode.title" class="w-full h-full rounded-sm" draggable="false" loading="lazy">
        </div>
        <div class="p-1">
            <p class="text-sm text-slate-300">{{episode.episode}}</p>
            <h1 class="text-lg truncate">{{episode.title}}</h1>
        </div>
    </NuxtLink>
</template>
<script setup>
const props = defineProps(['episode', 'nullImage']);
</script>