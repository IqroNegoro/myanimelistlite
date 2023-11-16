<template>
    <div class="fixed w-full h-screen top-0 left-0 bg-black/50 z-50 overscroll-contain overflow-hidden text-white">
        <Transition name="slide-right" appear>
            <div class="w-full md:w-1/2 lg:w-1/3 h-full absolute top-0 left-0 bg-dark-primary flex flex-col gap-4">
                <div class="flex flex-row justify-between items-center p-4">
                    <h1 class="font-semibold text-xl">Search Anime</h1>
                    <button>
                        <i class="bx bx-x text-2xl" @click="searchStatus = false"></i>
                    </button>
                </div>
                <div class="relative flex justify-start items-center px-4">
                    <i class="bx bx-search absolute ml-4 text-3xl"></i>
                    <input type="text" class="w-full rounded-full bg-dark-secondary h-12 pl-14" v-model="q" placeholder="Search your anime~">
                </div>
                <div class="flex flex-col justify-start items-center w-full h-full gap-4 overflow-y-auto px-4 pt-2 overscroll-contain">
                    <div v-if="!q">
                        <img src="/img/search.png" alt="herta search!" class="w-24">
                        <p>Type anything!</p>
                    </div>
                    <template v-else-if="pending"> 
                        <SearchAnimeSkeleton v-for="i in 5" :key="i" />
                    </template>
                    <div v-else-if="error">
                        <p v-if="error.data.status == 429">Pelan Pelan Pak Sopir Ngetik nya</p>
                        <img src="/img/error.png" alt="">
                    </div>
                    <div v-else-if="!animes.length" class="flex flex-col gap-2 justify-center items-center">
                        <p>Gak ada anime yang ketemu~</p>
                        <img src="/img/empty.png" alt="" class="w-1/2">
                    </div>
                    <SearchAnime v-else v-for="anime in animes" :key="anime.mal_id" :anime="anime" />
                    <div ref="fetchPoint"></div>
                </div>
            </div>
        </Transition>
    </div>
</template>
<script setup>
const searchStatus = useSearch();
const q = ref("");
const limit = ref(25);
const page = ref(0);
const animes = ref([]);
const timeout = ref(undefined);
const fetchPoint = ref(undefined);
const { data: searchedAnime, pending, error, execute } = await searchAnime({
    params: {
        q,
        limit,
        page
    }
});

pending.value = false;

watch(q, newVal => {
    page.value = 1,
    animes.value = [];
});

watch(searchedAnime, newVal => {
    if (q.value) {
        animes.value = [...animes.value, ...newVal.data]
    } else {
        animes.value = []
    }
})

onMounted(() => {
    useScroll(fetchPoint.value, () => {
        if (q.value && searchedAnime.value?.pagination.has_next_page) {
            page.value += 1
        }
    })
})

</script>
<style scoped>
.slide-right-enter-active,
.slide-right-leave-active {
    transition: all 0.25s ease-out
}

.slide-right-enter-from,
.slide-right-leave-from {
    transform: translateX(-100%)
}
</style>