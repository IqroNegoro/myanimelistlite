<template>
    <div>

        <NuxtLink :to="`#`" class="w-64 flex flex-col snap-center" draggable="false">
            <img v-if="episode.images" :src="episode.images?.jpg.image_url ?? nullImage" :alt="episode.title" class="w-full h-full rounded-sm" draggable="false" loading="lazy">
            <div class="p-1">
                <p class="text-sm text-slate-300">{{episode.episode}}</p>
                <h1 class="text-lg truncate">{{episode.title}}</h1>
            </div>
        </NuxtLink>
    </div>
</template>
<script setup>
const props = defineProps(['episode', 'nullImage']);
</script>