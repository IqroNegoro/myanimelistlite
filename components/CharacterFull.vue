<template>
    <div class="w-full flex justify-center items-center h-full fixed top-0 left-0 bg-dark-primary/50">
        <div class="flex justify-center items-center flex-col md:w-1/2 w-full h-full md:h-auto bg-dark-primary">
            <img :src="character.images?.webp?.image_url ?? character.images?.jpg?.image_url" :alt="character.name">
            <h1 class="font-semibold text-2xl"> {{ character.name }} </h1>
            <p> {{ character.name_kanji }} </p>
            
        </div>
    </div>
</template>
<script setup>
const { characterId } = defineProps(["characterId"]);
const { data: character, pending, error, execute } = await getAnimeCharacter(characterId);
</script>