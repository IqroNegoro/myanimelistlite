<template>
    <div class="w-full snap-center md:w-1/2 h-36 flex flex-row shrink-0 bg-dark rounded-md">
        <img :src="review.user?.images?.webp?.image_url ?? review.user?.images?.jpg?.image_url" :alt="review.user.username" class="aspect-[9/16] object-cover object-center rounded-l-md">
        <div class="px-2 w-full py-1 flex flex-col justify-between items-start">
            <h1 class="font-semibold"> {{ review.user.username }} </h1>
            <p class="text-left text-sm overflow-y-scroll my-1 whitespace-pre-line">{{ review.review }}</p>
            <div class="flex w-full justify-between text-sm items-center">
                <div class="flex justify-center items-center flex-row gap-2">
                    <p><i class="bx bxs-star"></i> {{ review.score }} </p>
                    <p><i class="bx bxs-like"></i> {{ review.reactions.overall }} </p>
                </div>
                <p class=""> {{ moment(review.date).format("L") }} </p>
            </div>
        </div>
    </div>
</template>
<script setup>
import moment from "moment"
const { review } = defineProps(["review"]);
</script>