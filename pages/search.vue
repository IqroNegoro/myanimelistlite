<template>
    <div class="pt-16 px-4">
        <div class="flex justify-between items-center pr-4">
            <h1 class="text-3xl font-bold">Search for {{searchQuery.q}}</h1>
            <NuxtLink v-if="hasNextPage?.current_page > 1" :to="`/${useRoute().name}?q=${searchQuery.q}&page=${hasNextPage?.current_page - 1}`" class="font-semibold">
                Previous
            </NuxtLink>
            <NuxtLink v-if="hasNextPage?.has_next_page" :to="`/${useRoute().name}?q=${searchQuery.q}&page=${hasNextPage?.current_page + 1}`" class="font-semibold">
                Next
            </NuxtLink>
        </div>
        <div v-if="!searchQuery.q" class="flex justify-center items-center flex-col">
            <img src="/img/kuru.gif" alt="Loading..." class="w-36">
            <h1>Gk ketemu nih!</h1>
        </div>
        <div v-else-if="search.length" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-flow-row gap-2">
            <SearchAnime v-for="anime in search" :key="anime.mal_id" :anime="anime" />
        </div>
        <div v-else class="flex justify-center items-center">
            <img src="/img/kuru.gif" alt="Loading...">
        </div>
    </div>
</template>
<script setup>
const searchQuery = computed(() => useRoute().query);
const search = ref([]);
const hasNextPage = ref(null);
watch(() => searchQuery.value, async () => {
    console.log('eksekusi gk nih')
    if (searchQuery.value.q) {
        const { data } = await searchAnime(searchQuery.value.q, {
            page: searchQuery.value.page ?? 1
        })
        search.value = data.value.data;
        hasNextPage.value = data.value.pagination
    }
}, {
    immediate: true
})
</script>