<template>
    <div class="p-4">
        <div class="rounded-md md:h-[28rem] h-96 w-full relative overflow-hidden">
            <button v-if="topAnimes.length" class="absolute bg-white/10 hover:bg-white/25 transition-all duration-150 z-10 flex justify-center items-center ml-4 text-white text-3xl top-1/2 left-0 -translate-y-1/2" @click="index <= 0 ? index = topAnimes.length - 1 : index--">
                <i class="bx bx-chevron-left"></i>
            </button>
            <button v-if="topAnimes.length" class="absolute bg-white/10 hover:bg-white/25 transition-all duration-150 z-10 flex justify-center items-center mr-4 text-white text-3xl top-1/2 right-0 -translate-y-1/2" @click="index >= topAnimes.length - 1 ? index = 0 : index++">
                <i class="bx bx-chevron-right"></i>
            </button>
            <div class="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-row gap-2 justify-center items-center">
                <button class="w-1 h-1 hover:w-2 hover:h-2 transition-all duration-150 cursor-pointer bg-white rounded-md" :class="{'w-2 h-2': index == i}" v-for="(bullet, i) in topAnimes" :key="bullet.mal_id" @click="index = i"></button>
            </div>
            <div class="w-full h-full skeleton rounded-md" v-if="pendingTopAnimes"></div>
            <template v-else v-for="(anime, i) in topAnimes" :key="anime.mal_id">
                <TopAnimeHero v-if="index == i" :anime="anime" class="w-full h-full text-white" />
            </template>
        </div>
        <h1 class="text-white text-2xl font-semibold mt-4">Season Now</h1>
        <div class="flex flex-row flex-nowrap gap-4 overflow-x-auto w-full py-2">
            <template v-if="pendingSeasonAnimes">
                <AnimeCardSkeleton v-for="i in 10" :key="i" />
            </template>
            <AnimeCard v-else v-for="anime in seasonAnimes" :key="anime.mal_id" :anime="anime" />
        </div>
        <h1 class="text-white text-2xl font-semibold mt-4">Upcoming Anime</h1>
        <div class="flex flex-row flex-nowrap gap-4 overflow-x-auto w-full py-2">
            <template v-if="pendingUpcomingSeason">
                <AnimeCardSkeleton v-for="i in 10" :key="i" />
            </template>
            <AnimeCard v-else v-for="anime in upcomingSeason" :key="anime.mal_id" :anime="anime" />
        </div>
    </div>
</template>
<script setup>
const index = ref(0);

const { data: topAnimes, pending: pendingTopAnimes } = await getTopAnimes();
const { data: seasonAnimes, pending: pendingSeasonAnimes } = await getSeasonNow();
const { data: upcomingSeason, pending: pendingUpcomingSeason } = await getUpcomingSeason();

useHead({
    title: "Mallite",
});

useSeoMeta({
    title: "Mallite",
    description: "Search your anime in mal lite!",
    ogDescription: "Search your anime in mal lite!",
    ogImage: "https://static.wikia.nocookie.net/shadows-house-series/images/6/66/Emilico_profile.png/revision/latest?cb=20230319143337",
});
</script>