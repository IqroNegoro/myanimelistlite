<template>
    <NuxtLink class="w-48">
        <div class="aspect-[4/6] overflow-hidden">
            <img :src="character.character.images.webp.image_url" :alt="character.character.name" draggable="false" class="object-cover object-top w-full h-full" loading="lazy">
        </div>
        <div class="aspect-[4/6] overflow-hidden mt-1">
            <img :src="character.voice_actors?.person.images?.jpg?.image_url" :alt="character.voice_actors?.person.name" draggable="false" class="object-cover object-top w-full h-full" loading="lazy">
        </div>
        <div class="flex justify-between">
            <div>
                <p class="font-semibold text-md">{{ character.character.name }}</p>
                <p class="text-sm text-slate-300">{{ character.role }}</p>
            </div>
            <div class="text-right">
                <p class="font-semibold text-md">{{ character.voice_actors?.person.name ?? 'Unknown'}}</p>
                <p class="text-sm text-slate-300">{{ character.voice_actors?.language ?? 'Unknown' }}</p>
            </div>
        </div>
    </NuxtLink>
</template>
<script setup>
const props = defineProps({
    character: Object
});
</script>