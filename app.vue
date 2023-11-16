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
watch(() => useRoute().path, () => {
  searchStatus.value = false;
}, {
  deep: true
})
</script>