<template>
    <div class="p-4">
        <div class="rounded-md md:h-[28rem] h-96 w-full relative overflow-hidden">
            <button class="absolute z-10 flex justify-center items-center ml-4 text-white text-3xl top-1/2 left-0 -translate-y-1/2" @click="index <= 0 ? index = topAnimes.data.length - 1 : index--">
                <i class="bx bx-chevron-left"></i>
            </button>
            <button class="absolute z-10 flex justify-center items-center mr-4 text-white text-3xl top-1/2 right-0 -translate-y-1/2" @click="index >= topAnimes.data.length - 1 ? index = 0 : index++">
                <i class="bx bx-chevron-right"></i>
            </button>
            <div class="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-row gap-2 justify-center items-center">
                <button class="w-1 h-1 hover:w-2 hover:h-2 transition-all duration-150 cursor-pointer bg-white rounded-md" :class="{'w-2 h-2': index == i}" v-for="(bullet, i) in topAnimes.data" :key="bullet.mal_id" @click="index = i"></button>
            </div>
            <template v-for="(anime, i) in topAnimes.data" :key="anime.mal_id">
                <TopAnimeHero v-if="index == i" :anime="anime" class="w-full h-full text-white" />
            </template>
        </div>
        <h1 class="text-white text-2xl font-semibold mt-4">Season Now</h1>
        <div class="flex flex-row flex-nowrap gap-4 overflow-x-auto w-full py-2">
            <AnimeCard v-for="anime in seasonAnimes.data" :key="anime.mal_id" :anime="anime" />
        </div>
        <h1 class="text-white text-2xl font-semibold mt-4">Upcoming Anime</h1>
        <div class="flex flex-row flex-nowrap gap-4 overflow-x-auto w-full py-2">
            <AnimeCard v-for="anime in upcomingSeason.data" :key="anime.mal_id" :anime="anime" />
        </div>
    </div>
</template>
<script setup>
const index = ref(0);
const interval = ref(undefined);
const { data: topAnimes } = await getTopAnimes();
const { data: seasonAnimes } = await getSeasonNow();
const { data: upcomingSeason } = await getUpcomingSeason();

useHead({
    title: "Mallite"
});

useSeoMeta({
    title: "Mallite"
});
</script>