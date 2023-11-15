<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <Navbar />
    <Search v-if="searchStatus" />
    <NuxtPage />  
  </NuxtLayout>
</template>
<script setup>
const searchStatus = useSearch();
</script>
