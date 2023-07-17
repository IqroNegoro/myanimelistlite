<template>
    <div class="w-full bg-black">
        <div class="w-full h-screen bg-[linear-gradient(to_top,rgba(0,0,0,0.8),rgba(0,0,0,0)),url('/img/emilico.jpg')] bg-center bg-no-repeat bg-cover flex items-center px-10 md:px-20 shadow-[0_0_100px_10px_rgba(255,0,0,0.5)]" id="header">
            <div class="w-full md:w-1/2 flex flex-col gap-4">
                <h1 class="text-3xl text-center md:text-left md:text-5xl font-bold text-yellow-200 transition-colors duration-200 hover:text-red-700">Shadow House</h1>
                <p class="text-white text-center md:text-left">The Shadows, characterized by their pitch-black appearance and tendency to emit soot when agitated, are a family of nobles who reside in a colossal manor deep within the mountains far from other humans. When a Shadow child is nearly of-age, they are assigned a Living Doll who acts not only as their attendant but also as their second half—the faces they could have had if not for their complexion</p>
                <NuxtLink to="/anime/43439" class="bg-red-700 max-md:mx-auto transition-colors duration-200 hover:bg-yellow-200 hover:text-red-700 rounded-sm block md:mr-auto px-2 py-1 text-white font-medium">
                    Take A Look
                </NuxtLink>
            </div>
        </div>
        <div class="w-full p-4 text-white font-semibold text-2xl mt-8">
            Top Anime
            <div class="w-full grid grid-flow-col grid-rows-1 gap-8 my-4 overflow-x-auto remove-scrollbar" v-if="!pendingTop" @mousedown="useDraggable">
                <TopAnime v-for="top in topAnime" :key="top.mal_id" :top="top" />
            </div>
        </div>
        <div class="w-full p-4 text-white font-semibold text-2xl mt-8">
             {{ pendingSeasonNow ? '' : `${animeSeasonNow[0].season.replace(/^[a-zA-Z]/gi, x => x.toUpperCase())}` }} {{ pendingSeasonNow ? new Date().getFullYear() : `${animeSeasonNow[0].year}` }} Anime
            <div class="w-full grid grid-flow-col grid-rows-1 gap-8 my-4 overflow-x-auto remove-scrollbar" v-if="!pendingSeasonNow" @mousedown="useDraggable">
                <SeasonAnime v-for="season in animeSeasonNow" :key="season.mal_id" :season="season" />
            </div>
        </div>
    </div>
</template>
<script setup>
const { topAnime, pendingTop } = await getTopAnime();
const { animeSeasonNow, pendingSeasonNow } = await getAnimeSeason();
useHead({
    title: "My Anime List Lite",
    meta: [
        {
            name: 'keywords', content: 'My Anime List Lite',
            name: 'description', content: 'My Anime List Lite',
            name: 'author', content: 'Iqro Negoro',
        }
    ]
})
</script>