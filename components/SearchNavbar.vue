<template>
    <div
        class="fixed w-full h-screen top-0 left-0 flex max-md:pt-16 md:justify-center items-center flex-col gap-2 bg-black bg-opacity-75 z-[99999999]">
        <button class="absolute right-0 top-0 m-4" @click="$emit('showSearch')">
            <i class="bx bx-x text-3xl"></i>
        </button>
        <div class="flex justify-center items-center flex-col gap-4 w-full z-[999999]">
            <h1 class="font-semibold text-4xl">Search</h1>
            <div class="flex justify-center items-center gap-1 flex-col w-full">
                <form class="relative w-3/4 md:w-1/4" @submit.prevent="handleSearch">
                    <button class="absolute top-0 left-0 h-full px-2 pt-1" @submit.prevent="handleSearch">
                        <i class="bx bx-search text-3xl"></i>
                    </button>
                    <input type="text" class="bg-transparent outline-none border border-white pl-12 w-full h-12 font-semibold text-xl" autofocus v-model="searchInput">
                </form>
                <div class="flex justify-center items-center gap-1 text-left flex-col">
                    <div class="flex justify-center items-center gap-1">
                        <button @click="selectFocus = !selectFocus">
                            {{ capitalizeFirst(selected) }}
                        </button>
                        <i class="bx bx-chevron-down" v-if="selectFocus"></i>
                        <i class="bx bx-chevron-up" v-else></i>
                    </div>
                    <div class="flex flex-col gap-2" v-if="selectFocus">
                        <button @click="selectFocus = !selectFocus">
                            Anime
                        </button>
                        <button @click="selectFocus = !selectFocus">
                            Manga
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const emit = defineEmits(["showSearch"])
const selectFocus = ref(false);
const selected = ref('anime');
const searchInput = ref(useRoute().query.q);
const handleSearch = async () => {
    await navigateTo({  
        path: "/search",
        query: {
            q: searchInput.value,
            page: 1
        },
        replace: true
    })
    emit("showSearch")
}
</script>