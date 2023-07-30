<template>
    <ClientOnly>
        <div class="pt-16 px-4" v-if="search">
            <div class="flex justify-between items-center pr-4 mb-4">
                <h1 class="text-3xl font-bold">Search for {{ q }} {{ page ? `&vert; page ${page}` : '' }}</h1>
                <div class="flex gap-4">
                    <NuxtLink v-if="search.pagination.current_page > 1"
                        :to="{ path: '/search', query: { q, page: parseInt(page) - 1 } }" class="font-semibold">
                        <i class="bx bx-chevron-left text-2xl"></i>
                    </NuxtLink>
                    <NuxtLink v-if="search.pagination.has_next_page"
                        :to="{ path: '/search', query: { q, page: parseInt(page) + 1 } }" class="font-semibold">
                        <i class="bx bx-chevron-right text-2xl"></i>
                    </NuxtLink>
                </div>
            </div>
            <div v-if="!q" class="flex justify-center items-center flex-col">
                <img src="/img/kuru.gif" alt="Loading..." class="w-36">
                <h1>Gk ketemu nih!</h1>
            </div>
            <div v-else-if="search.data.length == 0" class="flex justify-center items-center flex-col">
                <img src="/img/kuru.gif" alt="Loading..." class="w-36">
                <h1>Kosong Nih</h1>
            </div>
            <div v-else-if="search.data.length" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-flow-row gap-2">
                <SearchAnime v-for="anime in search.data" :key="anime.mal_id" :anime="anime" />
            </div>
            <div v-else-if="error">
                <img src="/img/kuru.gif" alt="Loading..." class="w-36">
                <h1>Ada yang salah nih! balik ke rumah yaa~</h1>
                <NuxtLink to="/" class="px-2 py-1 bg-blue-500">
                    Home
                </NuxtLink>
            </div>
            <div v-else class="flex justify-center items-center">
                <img src="/img/kuru.gif" alt="Loading...">
            </div>
        </div>
    </ClientOnly>
</template>
<script setup>
const loading = useLoading();
loading.value = true;

const route = computed(() => useRoute());
const q = computed(() => route.value.query.q);
const page = computed(() => route.value.query.page);
const { data: search, error } = await searchAnime({
    query: {
        q,
        page,
        sfw: '',
        order_by: 'rank'
    }
})
if (!q.value || page.value == 0) {
    throw createError({ statusCode: 404, message: 'Page Not Found' })
}
useHead({
    title: `Search For ${q.value}`
})
useSeoMeta({
    title: `Search For ${q.value}`,
    description: 'Search your anime in mallite now!',
    ogDescription: 'Search your anime in mallite now!',
    ogTitle: `Search for ${q.value}`,
    applicationName: 'My search List Lite',
    ogType: 'website',
    twitterCard: 'app',
    twitterTitle: `Search For ${q.value}`,
    twitterDescription: 'Search your anime in mallite now!',
})
loading.value = false;
</script>