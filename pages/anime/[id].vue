<template>
    <div>
        <div class="w-full h-screen bg-top bg-no-repeat bg-cover flex items-center px-10 md:px-20" :style="`background-image: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('${data.images.webp.large_image_url}')`" id="header">
            <div class="flex flex-col justify-start items-center gap-4">
                <div>
                    <img :src="data.images.webp.large_image_url" :alt="data.title" class="rounded-sm">
                </div>
                <div>
                    <h1 class="text-white text-center lg:text-2xl text-xl font-bold">{{ data.title }}</h1>
                    <p class="text-center text-white">{{data.title_japanese}}</p>
                    <div class="text-white text-center">
                        <i class="bx bx-heart"></i>
                        {{ data.favorites }}
                        <i class="bx bx-star"></i>
                        {{ data.score }} ({{ data.scored_by }})
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const {id} = useRoute().params;
const { data, pendingAnimeId } = await getAnimeById(id);
useHead({
    title: data.value.title,
    meta: [
        {
            name: 'description', content: data.value.synopsis,
            name: 'keywords', content: data.value.title
        }
    ]
})
useSeoMeta({
    title: data.value.title,
    description: data.value.synopsis,
    ogDescription: data.value.synopsis,
    ogTitle: data.value.title,
    ogImage: data.value.images.webp.large_image_url,
    applicationName: 'My Anime List Lite',
    ogType: 'website',
    twitterCard: 'app',
    twitterTitle: data.value.title,
    twitterDescription: data.value.synopsis,
    twitterImage: data.value.images.webp.large_image_url,
    twitterImageType: 'image/jpeg',
    twitterImageAlt: data.value.title,
})
console.log(data.value)
</script>