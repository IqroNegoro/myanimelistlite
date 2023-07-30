<template>
    <div class="flex flex-row gap-4">
        <img :src="review.user.images.webp.image_url" :alt="review.user.username" class="w-12 h-max">
        <div class="w-full">
            <div class="flex justify-between items-center">
                <NuxtLink class="font-semibold text-sm md:text-lg">{{review.user.username}}</NuxtLink>
                <p class="text-sm md:text-lg">{{new Intl.DateTimeFormat("en-US", {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                }).format(new Date(review.date))}}</p>
            </div>
            <div v-for="tag in review.tags" :key="tag">
                <i class="px-1 text-sm bx" :class="{'bx-sad text-red-500': tag == 'Not Recommended', 'bxs-star text-blue-500': tag == 'Recommended', 'bxs-star-half text-green-500': tag == 'Mixed Feelings'}"></i>
                <span :class="{'text-red-500': tag == 'Not Recommended', 'text-blue-500': tag == 'Recommended', 'text-green-500': tag == 'Mixed Feelings'}">{{tag}}</span>
            </div>
            <div class="line-clamp-6 relative review" :id="review.mal_id">
                <p class="text-sm whitespace-pre-line" @click="handleOverflowing"> {{ review.review }} </p>
                <div v-if="isOverflowing && !showLess" class="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-b from-transparent to-black"></div>
            </div>
            <button v-if="isOverflowing" @click="handleOverflowing">
                <i class="bx bx-chevron-up text-2xl" v-if="showLess"></i>
                <i class="bx bx-chevron-down text-2xl" v-else></i>
            </button>
        </div>
    </div>
</template>
<script setup>
const props = defineProps(["review"]);
let isOverflowing = ref(false);
let showLess = ref(false);
let reviewContainer;

const handleOverflowing = () => {
    reviewContainer.classList.toggle("line-clamp-6");
    showLess.value = !showLess.value;
}

onMounted(() => {
    reviewContainer = document.getElementById(props.review.mal_id);
    if (reviewContainer.clientHeight < reviewContainer.scrollHeight) {
        isOverflowing.value = true;
        console.log("aku overflow")
    }
})
</script>