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
                <div class="relative flex flex-row gap-2 justify-start items-center px-4">
                    <i class="bx bx-search absolute ml-4 text-3xl"></i>
                    <input type="text" class="w-full rounded-full bg-dark-secondary h-12 pl-14" v-model="q" placeholder="Search your anime~">
                    <!-- <button class="relative text-3xl flex justify-center items-center" @click="filterStatus = true; filterSelectedStatus = undefined">
                        <i class="bx bx-filter transition-transform duration-150" :class="{'-rotate-180': filterStatus}"></i>
                    </button> -->
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
        <!-- <div class="fixed top-0 left-0 w-full h-full flex flex-col gap-1 bg-dark-primary" v-if="filterStatus">
            <div class="flex flex-row p-4 justify-between items-center">
                <h1 class="font-semibold text-3xl">Filters</h1>
                <button class="text-3xl" @click="filterStatus = false">
                    <i class="bx bx-x"></i>
                </button>
            </div>
            <button v-for="(value, name, i) in filters" :key="i" class="relative hover:bg-dark-secondary p-4 flex gap-2 flex-row justify-center items-center" @click="filterSelectedStatus == name ? filterSelectedStatus = undefined : filterSelectedStatus = name">
                <div class="flex flex-row justify-between w-full">
                    <p>{{ pascalCase(name) }}</p>
                    <p>{{capitalize(value || 'None')}}</p>
                </div>
                <i class="bx bx-chevron-right text-xl"></i>
            </button>
            <button class="py-2" @click="filters = {sort: '', status: '', order_by: ''}">Clear Filter</button>
            <div v-if="filterSelectedStatus == 'status'" class="w-full bg-dark-primary right-0">
                <h1 class="p-4 font-semibold">Status</h1>
                <div class="flex flex-col">
                    <button class="w-full text-left flex justify-start items-center hover:bg-dark-secondary py-2 px-4" @click="filters.status = 'airing'"><i class="bx bx-chevron-right text-2xl"></i> Airing</button>
                    <button class="w-full text-left flex justify-start items-center hover:bg-dark-secondary py-2 px-4" @click="filters.status = 'completed'"><i class="bx bx-chevron-right text-2xl"></i> Completed</button>
                    <button class="w-full text-left flex justify-start items-center hover:bg-dark-secondary py-2 px-4" @click="filters.status = 'upcoming'"><i class="bx bx-chevron-right text-2xl"></i> Upcoming</button>
                </div>
            </div>
            <div v-if="filterSelectedStatus == 'sort'" class="w-full bg-dark-primary right-0">
                <h1 class="p-4 font-semibold">Sort</h1>
                <div class="flex flex-col">
                    <button class="w-full text-left flex justify-start items-center hover:bg-dark-secondary py-2 px-4" @click="filters.sort = 'asc'"><i class="bx bx-chevron-right text-2xl"></i> Ascendant</button>
                    <button class="w-full text-left flex justify-start items-center hover:bg-dark-secondary py-2 px-4" @click="filters.sort = 'desc'"><i class="bx bx-chevron-right text-2xl"></i> Descendant</button>

                </div>
            </div>
            <div v-if="filterSelectedStatus == 'order_by'" class="w-full bg-dark-primary right-0">
                <h1 class="p-4 font-semibold">Order</h1>
                <div class="flex flex-col">
                    <button class="w-full text-left flex justify-start items-center hover:bg-dark-secondary py-2 px-4" @click="filters.order_by = 'title'"><i class="bx bx-chevron-right text-2xl"></i> Title</button>
                    <button class="w-full text-left flex justify-start items-center hover:bg-dark-secondary py-2 px-4" @click="filters.order_by = 'episodes'"><i class="bx bx-chevron-right text-2xl"></i> Episodes</button>
                    <button class="w-full text-left flex justify-start items-center hover:bg-dark-secondary py-2 px-4" @click="filters.order_by = 'score'"><i class="bx bx-chevron-right text-2xl"></i> Score</button>
                    <button class="w-full text-left flex justify-start items-center hover:bg-dark-secondary py-2 px-4" @click="filters.order_by = 'rank'"><i class="bx bx-chevron-right text-2xl"></i> Rank</button>
                    <button class="w-full text-left flex justify-start items-center hover:bg-dark-secondary py-2 px-4" @click="filters.order_by = 'popularity'"><i class="bx bx-chevron-right text-2xl"></i> Popularity</button>
                    <button class="w-full text-left flex justify-start items-center hover:bg-dark-secondary py-2 px-4" @click="filters.order_by = 'favorites'"><i class="bx bx-chevron-right text-2xl"></i> Favorites</button>
                </div>
            </div>
        </div> -->
    </div>
</template>
<script setup>
const searchStatus = useSearch();
const filterStatus = ref(false);
const filterSelectedStatus = ref(undefined);

// const filters = ref({
//     sort: "",
//     status: "",
//     order_by: ""
// });

const q = ref("");
const limit = ref(25);
const page = ref(0);
const animes = ref([]);
const fetchPoint = ref(undefined);
const { data: searchedAnime, pending, error, execute } = await searchAnime({
    params: {
        q,
        limit,
        page,
        sfw: '',
        // ...filters.value
    }
});

pending.value = false;

watch(q, () => {
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
    useScroll([fetchPoint.value], () => {
        if (!pending.value && q.value && searchedAnime.value?.pagination.has_next_page) {
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