<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <Navbar />
    <Search v-if="searchStatus" />
    <NuxtPage />
    <p class="text-center">&copy; Iqro Negoro 2023</p>
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