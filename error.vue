<template>
    <div class="w-full h-screen bg-black pt-20 flex justify-center items-center flex-col text-white">
        <Navbar />
        <img src="./img/kuru.gif" alt="" class="w-48">
        <p class="font-bold text-3xl">
            {{ error.statusCode }}
        </p>
        <h1>Aduh gk ketemu nih! balik ke home yuk~</h1>
        <NuxtLink to="/" class="px-2 py-1 rounded-sm bg-red-500 mt-4">
            Home
        </NuxtLink>
    </div>
</template>
<script setup>
defineProps(["error"]);
</script>