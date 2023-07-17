<template>
    <div>
        <div class="w-full h-screen bg-top bg-no-repeat bg-cover flex items-center px-10 md:px-20" :style="`background-image: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('${anime.images.webp.large_image_url}')`" id="header">
            <div class="w-full flex flex-col md:flex-row justify-start md:justify-evenly items-center gap-4">
                <div>
                    <img :src="anime.images.webp.large_image_url" :alt="anime.title" class="rounded-sm w-96 mx-auto md:w-full">
                </div>
                <div class="flex justify-center items-center flex-col">
                    <h1 class="text-white text-center lg:text-2xl text-xl font-bold">
                        <a :href="anime.url" target="_blank">{{ anime.title }}</a>
                    </h1>
                    <p class="text-center text-white">{{anime.title_japanese}}</p>
                    <div class="text-white text-center">
                        <i class="bx bx-heart"></i>
                        {{ anime.favorites }}
                        <i class="bx bx-star"></i>
                        {{ anime.score }} ({{ anime.scored_by }})
                    </div>
                    <div class="text-white text-center">
                        {{ capitalizeFirst(anime.season) }} &bull; {{ anime.year }} &bull; {{ anime.studios[0].name }}
                    </div>
                </div>
            </div>
        </div>
        <div class="px-3 py-1">
            <p class="text-xl font-semibold">Synopsis</p>
            <p class="whitespace-pre-line text-sm">{{anime.synopsis}}</p>
        </div>
        <div class="px-3 py-1">
            <p class="text-xl font-semibold">Episodes</p>
            <div class="w-full grid grid-flow-col grid-rows-1 gap-8 my-4 overflow-x-auto remove-scrollbar snap-x snap-mandatory" @mousedown="useDraggable">
                <Episodes v-for="episode in episodes" :key="episode.mal_id" :episode="episode" />
            </div>
        </div>
    </div>
</template>
<script setup>
const loading = useLoading();
loading.value = true;
const {id} = useRoute().params;
const { anime, pendingAnimeId } = await getAnimeById(id);
const { episodes } = await getEpisodesById(id);
console.log(episodes.value)
useHead({
    title: anime.value.title,
    meta: [
        {
            name: 'description', content: anime.value.synopsis,
            name: 'keywords', content: anime.value.title
        }
    ]
})
useSeoMeta({
    title: anime.value.title,
    description: anime.value.synopsis,
    ogDescription: anime.value.synopsis,
    ogTitle: anime.value.title,
    ogImage: anime.value.images.webp.large_image_url,
    applicationName: 'My Anime List Lite',
    ogType: 'website',
    twitterCard: 'app',
    twitterTitle: anime.value.title,
    twitterDescription: anime.value.synopsis,
    twitterImage: anime.value.images.webp.large_image_url,
    twitterImageType: 'image/jpeg',
    twitterImageAlt: anime.value.title,
})
console.log(anime.value)
loading.value = false;
</script>