<template>
    <NuxtLink :to="{name: 'animes-id', params: {id: anime.mal_id}}" class="w-48 hover:-translate-y-2 duration-200 cursor-pointer flex flex-col text-white flex-shrink-0 rounded-md overflow-hidden bg-dark-secondary">
        <div class="relative">
            <div class="absolute top-0 left-0 p-2 w-full bg-gradient-to-b from-black/75 to-transparent truncate">
                #{{ anime.rank ?? 0 }} &bull; <i class="bx bx-heart"></i> {{ anime.favorites ?? 0 }} &bull; <i class="bx bx-star"></i> {{ anime.score ?? 0 }}
            </div>
            <img :src="anime.images?.webp?.large_image_url" :alt="anime.title" class="rounded-sm aspect-[9/16] object-cover" loading="lazy">
        </div>
        <div class="p-2">
            <h1 class="font-semibold truncate"> {{ anime.title }} </h1>
            <p class="truncate text-sm"> {{ anime.synopsis }} </p>
            <div class="flex flex-row justify-start items-center text-xs">
                <i class="bx bx-play text-2xl"></i> {{ anime.episodes || 0 }} | {{ anime.duration || 'N/A' }}
            </div>
        </div>
    </NuxtLink>
</template>
<script setup>
const { anime } = defineProps(["anime"]);
</script>