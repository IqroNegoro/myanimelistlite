<template>
    <div class="fixed top-0 left-0 w-full h-16 flex justify-between items-center px-4 md:px-12 backdrop-blur-sm bg-black bg-opacity-25 z-[99999]">
        <div>
            <h1 class="font-bold">Mallite</h1>
        </div>
        <div class="max-md:hidden">
            <ul class="flex gap-4">
                <li>
                    <NuxtLink to="/" class="font-semibold">
                        Home
                    </NuxtLink>
                </li>                
                <li>
                    <NuxtLink to="https://anisaki.bayudc.fun/" class="font-semibold" target="_blank">
                        Schedules
                    </NuxtLink>
                </li>
            </ul>
        </div>
        <div class="flex gap-4">
            <button @click="showSearch = true">
                <i class="bx bx-search text-2xl"></i>
            </button>
            <button class="md:hidden" @click="showNav = true">
                <i class="bx bx-menu text-3xl"></i>
            </button>
        </div>
        <div class="md:hidden fixed top-0 left-0 w-full h-screen flex justify-center items-center z-[999] bg-black/75" v-if="showNav">
            <button class="absolute top-0 right-0 m-8" @click="showNav = false">
                <i class="bx bx-x text-3xl"></i>
            </button>
            <ul class="flex gap-4 flex-col items-center">
                <li>
                    <NuxtLink to="/" class="font-semibold">
                        Home
                    </NuxtLink>
                </li>                
                <li>
                    <NuxtLink to="https://anisaki.bayudc.fun/" class="font-semibold" target="_blank">
                        Schedules
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
    <SearchNavbar v-if="showSearch" @show-search="showSearch = false" />
</template>
<script setup>
const showSearch = ref(false);
const showNav = ref(false);
</script>