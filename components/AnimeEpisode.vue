<template>
    <div class="flex flex-col bg-dark-secondary w-48 shrink-0 snap-center rounded-md hover:-translate-y-2 transition-all duration-300">
        <img :src="episode.images.jpg.image_url" :alt="episode.title" class="aspect-video rounded-t-md" draggable="false">
        <div class="p-2 flex flex-col gap-1 text-left">
            <p class="text-sm" :title="episode.title"> {{ episode.title }} </p>
            <p class="text-xs"> {{ episode.episode }} </p>
        </div>
    </div>
</template>
<script setup>
const { episode } = defineProps(["episode"]);
</script>