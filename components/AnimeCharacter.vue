<template>
    <div class="flex flex-col bg-dark-secondary w-32 shrink-0 snap-center rounded-md hover:-translate-y-2 transition-all duration-300">
        <img :src="character.character.images?.webp?.image_url ?? character.character.images?.jpg?.image_url" :alt="character.name" class="aspect-[9/16] w-full object-cover object-top rounded-t-md" draggable="false">
        <div class="p-2 flex flex-col gap-1 text-left">
            <p class="text-sm" :title="character.character.name"> {{ character.character.name }} </p>
            <p class="text-xs"> {{ character.role }} </p>
        </div>
    </div>
</template>
<script setup>
const { character } = defineProps(["character"])
</script>