<template>
    <div class="w-full max-md:text-xs h-full text-white">
        <img :src="anime.images?.webp?.large_image_url ?? anime.images?.jpg?.large_image_url" alt="" class="w-full h-full object-cover object-center">
        <div class="absolute px-14 py-12 top-0 left-0 flex gap-2 flex-col bg-gradient-to-r from-black/75 to-transparent w-full h-full">
            <h1 class="md:text-3xl font-bold"> {{ anime.title }} </h1>
            <p class="text-xs"> {{ anime.title_japanese }} </p>
            <div class="flex items-center gap-1">
                #{{ anime.rank }} &bull; <i class="bx bx-heart"></i> {{ anime.favorites }} &bull; <i class="bx bx-star"></i> {{ anime.score }}
            </div>
            <div class="flex gap-1 flex-col justify-start w-max">
                <p class="font-semibold">Genres</p>
                <div class="flex flex-row gap-2">
                    <p v-for="(genre, i) in anime.genres" :key="genre.mal_id"> {{ genre.name }} {{ i == anime.genres.length - 1 ? '' : '|' }} </p>
                </div>
            </div>
            <p class="text-sm line-clamp-5 w-1/3"> {{ anime.synopsis }} </p>
            <div class="w-max flex flex-row gap-1 justify-center items-center">
                <i class="bx bx-play text-2xl"></i> {{ anime.episodes }} | {{ capitalize(anime.season) || 'N/A' }} | {{ anime.year || 'N/A' }}
            </div>
            <NuxtLink :to="{name: 'animes-id', params: {id: anime.mal_id}}" class="w-max cursor-pointer px-3 py-1 bg-white/25 backdrop-blur-xs rounded-sm">
                More
            </NuxtLink>
        </div>
    </div>
</template>
<script setup>
const { anime } = defineProps(["anime"]);
</script>