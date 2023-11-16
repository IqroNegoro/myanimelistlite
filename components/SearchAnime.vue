<template>
    <NuxtLink :to="{name: 'animes-id', params: {id: anime.mal_id}}" class="flex flex-row gap-2 w-full hover:bg-dark-secondary hover:-translate-y-2 transition-all duration-150 cursor-pointer">
        <img :src="anime.images?.webp?.large_image_url" :alt="anime.title" class="w-32 h-36 aspect-[9/16] rounded-sm">
        <div class="flex flex-col p-1 h-full w-full justify-between overflow-hidden">
            <p> {{ anime.title }} </p>
            <p class="line-clamp-2 text-xs"> {{ anime.synopsis ?? 'No Synopsis' }} </p>
            <div class="flex flex-row justify-start items-center text-xs">
                <i class="bx bx-play text-2xl"></i> {{ anime.episodes || 0 }} | {{ anime.duration || 'N/A' }}
            </div>
            <div class="flex items-center gap-1 text-xs">
                #{{ anime.rank }} &bull; <i class="bx bx-heart"></i> {{ anime.favorites }} &bull; <i class="bx bx-star"></i> {{ anime.score }}
            </div>            
        </div>
    </NuxtLink>
</template>
<script setup>
const { anime } = defineProps(["anime"]);
</script>