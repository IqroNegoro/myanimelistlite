<template>
    <div class="pt-16 px-4">
        <h1 class="text-3xl font-bold">Search</h1>
        <div v-if="search.length" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-flow-row gap-2">
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
watch(() => searchQuery.value.q, async () => {
    const { data } = await searchAnime(searchQuery.value.q)
    search.value = data.value.data;
}, {
    immediate: true
})
</script>