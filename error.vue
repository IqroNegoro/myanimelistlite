<template>
  COKKK LO ERROR!!!!
</template>
<script setup>
const props = defineProps(['errors'])

const handleError = () => clearError({ redirect: '/' })
</script>