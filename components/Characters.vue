<template>
    <NuxtLink class="w-48">
        <div class="w-48 h-auto overflow-hidden">
            <img :src="character.character.images.webp.image_url" :alt="character.character.name" draggable="false" class="w-48 h-48 object-cover object-top" loading="lazy">
        </div>
        <p class="font-semibold text-lg">{{ character.character.name }}</p>
        <p class="text-sm text-slate-300">{{ character.role }}</p>
    </NuxtLink>
</template>
<script setup>
const props = defineProps(["character"]);
</script>