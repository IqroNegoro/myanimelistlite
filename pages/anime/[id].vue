<template>
    <div>
        {{ id }}
    </div>
</template>
<script setup>
let {id} = useRoute().params;
</script>