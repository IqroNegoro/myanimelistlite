<template>
    <div>

    </div>
</template>
<script setup>
const { id } = useRoute().params;

const { data: anime } = await getAnimeById(id);
console.log(anime.value)
</script>