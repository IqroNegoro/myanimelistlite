<template>
    <NuxtLink class="w-48">
        <div class="aspect-[4/6] overflow-hidden">
            <img :src="character.character.images.webp.image_url" :alt="character.character.name" draggable="false" class="object-cover object-top w-full h-full" loading="lazy">
        </div>
        <p class="font-semibold text-lg">{{ character.character.name }}</p>
        <p class="text-sm text-slate-300">{{ character.role }}</p>
    </NuxtLink>
</template>
<script setup>
const props = defineProps(["character"]);
</script>