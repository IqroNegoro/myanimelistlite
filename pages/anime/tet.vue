<template>
    <div class="w-full h-[1500px] bg-white flex justify-center items-end" ref="container">
        <div :class="{'hidden': !showCircle}" class="w-48 h-48 rounded-full bg-black" ref="circle">

        </div>
    </div>
</template>
<script setup>
let circle = ref(null);
let showCircle = ref(false);
onMounted(() => {
    let observer = new IntersectionObserver(entries => {
        console.log(observer)
        entries.forEach(v => console.log(v))
    }, {
        threshold: 1,
        rootMargin: "0px"
    })

    observer.observe(circle.value);
    showCircle.value = true;
})
</script>