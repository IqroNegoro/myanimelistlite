<template>
    <div v-if="anime" class="pb-4">
        <div class="w-full h-screen bg-top bg-no-repeat bg-cover flex items-center px-10 md:px-20" :style="`background-image: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('${episodes[episodes.length - 1]?.images.jpg.image_url ?? anime.images.webp.large_image_url}')`" id="header">
            <div class="w-full flex flex-col md:flex-row justify-start md:justify-evenly items-center gap-4">
                <div>
                    <img :src="anime.images.webp.large_image_url" :alt="anime.title ?? ''" class="rounded-sm w-96 mx-auto md:w-full">
                </div>
                <div class="flex justify-center items-center flex-col">
                    <h1 class="text-white text-center lg:text-2xl text-xl font-bold">
                        <a :href="anime.url" target="_blank">{{ anime.title ?? '' }}</a>
                    </h1>
                    <p class="text-center text-white">{{anime.title_japanese ?? ""}}</p>
                    <div class="text-white text-center">
                        <i class="bx bx-heart"></i>
                        {{ anime.favorites ?? '' }}
                        #{{ anime.rank ?? '' }}
                        <i class="bx bx-star"></i>
                        {{ anime.score ?? '' }} ({{ anime.scored_by ?? '' }})
                    </div>
                    <div class="text-white text-center">
                        {{ anime.season ? capitalizeFirst(anime.season) : '?' }} &bull; {{ anime.year ?? '?' }} &bull; {{ anime.studios[0]?.name ?? '?' }}
                    </div>
                </div>
            </div>
        </div>
        <div class="px-3 my-4">
            <p class="text-xl font-semibold">Trailer</p>
            <p v-if="!anime.trailer.embed_url">There's no trailer</p>
            <div v-else>
                <button class="w-full md:w-1/4 relative group/overlay aspect-video" @click="showTrailer = true">
                    <div class="group/player absolute hidden group-hover/overlay:flex bg-black bg-opacity-50 w-full h-full top-0 left-0 justify-center items-center">
                        <i class="bx bx-play text-7xl transition-all duration-150 opacity-0 translate-y-4 group-hover/player:opacity-100 group-hover/player:translate-y-0"></i>
                    </div>
                    <img v-if="anime.trailer?.images?.maximum_image_url" :src="anime.trailer?.images?.maximum_image_url" :alt="anime.title" class="w-full h-full rounded-sm" draggable="false" loading="lazy">
                    <img v-else src="/img/kuru.gif" alt="Loading..." class="w-full h-full rounded-sm" draggable="false" loading="lazy">
                </button>
                <div class="fixed top-0 left-0 bg-black bg-opacity-50 w-full h-screen z-10 flex justify-center items-center" v-if="showTrailer" @click="showTrailer = false">
                    <iframe :src="anime.trailer?.embed_url" frameborder="0" class="aspect-video w-full md:w-3/4"></iframe>
                </div>
            </div>
        </div>
        <div class="px-3 my-4">
            <p class="text-xl font-semibold">Information</p>
            <table class="">
                <tbody>
                    <tr class="text-left">
                        <th class="align-top font-semibold text-md md:text-lg whitespace-nowrap">Score</th>
                        <th class="align-top font-semibold">&nbsp;:&nbsp;</th>
                        <td class="text-md md:text-lg align-bottom">{{anime.score ?? 'None'}} (Scored By {{ anime.scored_by  ?? 'None'}} Users)</td>
                    </tr>
                    <tr class="text-left">
                        <th class="align-top font-semibold text-md md:text-lg whitespace-nowrap">Ranked</th>
                        <th class="align-top font-semibold">&nbsp;:&nbsp;</th>
                        <td class="text-md md:text-lg align-bottom">#{{anime.rank ?? 'None'}}</td>
                    </tr>
                    <tr class="text-left">
                        <th class="align-top font-semibold text-md md:text-lg whitespace-nowrap">Popularity</th>
                        <th class="align-top font-semibold">&nbsp;:&nbsp;</th>
                        <td class="text-md md:text-lg align-bottom">#{{anime.popularity ?? 'None'}}</td>
                    </tr>
                    <tr class="text-left">
                        <th class="align-top font-semibold text-md md:text-lg whitespace-nowrap">Members</th>
                        <th class="align-top font-semibold">&nbsp;:&nbsp;</th>
                        <td class="text-md md:text-lg align-bottom">{{anime.members ?? 'None'}} Users</td>
                    </tr>
                    <tr class="text-left">
                        <th class="align-top font-semibold text-md md:text-lg whitespace-nowrap">Favorites</th>
                        <th class="align-top font-semibold">&nbsp;:&nbsp;</th>
                        <td class="text-md md:text-lg align-bottom">{{anime.favorites ?? 'None'}} Users</td>
                    </tr>
                    <tr class="text-left">
                        <th class="align-top font-semibold text-md md:text-lg whitespace-nowrap">Type</th>
                        <th class="align-top font-semibold">&nbsp;:&nbsp;</th>
                        <td class="text-md md:text-lg align-bottom">{{anime.type ?? 'None'}}</td>
                    </tr>
                    <tr class="text-left">
                        <th class="align-top font-semibold text-md md:text-lg whitespace-nowrap">Total Episode</th>
                        <th class="align-top font-semibold">&nbsp;:&nbsp;</th>
                        <td class="text-md md:text-lg align-bottom">{{anime.episodes ?? 'None'}}</td>
                    </tr>
                    <tr class="text-left">
                        <th class="align-top font-semibold text-md md:text-lg whitespace-nowrap">Duration</th>
                        <th class="align-top font-semibold">&nbsp;:&nbsp;</th>
                        <td class="text-md md:text-lg">{{anime.duration ?? 'None'}}</td>
                    </tr>
                    <tr class="text-left">
                        <th class="align-top font-semibold text-md md:text-lg whitespace-nowrap">Status</th>
                        <th class="align-top font-semibold">&nbsp;:&nbsp;</th>
                        <td class="text-md md:text-lg align-bottom">{{anime.status ?? 'None'}}</td>
                    </tr>
                    <tr class="text-left">
                        <th class="align-top font-semibold text-md md:text-lg whitespace-nowrap">Aired</th>
                        <th class="align-top font-semibold">&nbsp;:&nbsp;</th>
                        <td class="text-md md:text-lg align-bottom">{{anime.aired.string ?? 'None'}}</td>
                    </tr>
                    <tr class="text-left">
                        <th class="align-top font-semibold text-md md:text-lg whitespace-nowrap">Rating</th>
                        <th class="align-top font-semibold">&nbsp;:&nbsp;</th>
                        <td class="text-md md:text-lg align-bottom">{{anime.rating ?? 'None'}}</td>
                    </tr>
                    <tr class="text-left">
                        <th class="align-top font-semibold text-md md:text-lg whitespace-nowrap">Broadcast</th>
                        <th class="align-top font-semibold">&nbsp;:&nbsp;</th>
                        <td class="text-md md:text-lg align-bottom">{{anime.broadcast.string ?? 'None'}}</td>
                    </tr>
                    <tr class="text-left">
                        <th class="align-top font-semibold text-md md:text-lg whitespace-nowrap">Producers</th>
                        <th class="align-top font-semibold">&nbsp;:&nbsp;</th>
                        <td class="text-md md:text-lg" v-if="anime.producers?.length">
                            <NuxtLink v-for="(producer, index) in anime.producers" :to="producer.url" :key="producer.mal_id">{{producer.name}}{{ index != anime.producers?.length - 1 ? ", " : "" }}</NuxtLink>
                        </td>
                        <td v-else>
                            None
                        </td>
                    </tr>
                    <tr class="text-left">
                        <th class="align-top font-semibold text-md md:text-lg whitespace-nowrap">Licensors</th>
                        <th class="align-top font-semibold">&nbsp;:&nbsp;</th>
                        <td class="text-md md:text-lg" v-if="anime.licensors?.length">
                            <NuxtLink v-for="(licensor, index) in anime.licensors" :to="licensor.url" :key="licensor.mal_id">{{licensor.name}}{{ index != anime.licensors?.length - 1 ? ", " : "" }}</NuxtLink>
                        </td>
                        <td v-else>
                            None
                        </td>
                    </tr>
                    <tr class="text-left">
                        <th class="align-top font-semibold text-md md:text-lg whitespace-nowrap">Studio</th>
                        <th class="align-top font-semibold">&nbsp;:&nbsp;</th>
                        <td class="text-md md:text-lg" v-if="anime.studios?.length">
                            <NuxtLink v-for="(studio, index) in anime.studios" :to="studio.url" :key="studio.mal_id">{{studio.name}}{{ index != anime.studios?.length - 1 ? ", " : "" }}</NuxtLink>
                        </td>
                        <td v-else>
                            None
                        </td>
                    </tr>
                    <tr class="text-left">
                        <th class="align-top font-semibold text-md md:text-lg whitespace-nowrap">Source</th>
                        <th class="align-top font-semibold">&nbsp;:&nbsp;</th>
                        <td class="text-md md:text-lg">{{anime.source ?? 'Unknown'}}</td>
                    </tr>
                    <tr class="text-left">
                        <th class="align-top font-semibold text-md md:text-lg whitespace-nowrap">Genres</th>
                        <th class="align-top font-semibold">&nbsp;:&nbsp;</th>
                        <td class="text-md md:text-lg" v-if="anime.genres?.length">
                            <NuxtLink v-for="(genre, index) in anime.genres" :to="genre.url" :key="genre.mal_id">{{genre.name}}{{ index != anime.genres?.length - 1 ? ", " : "" }}</NuxtLink>
                        </td>
                    </tr>
                    <tr class="text-left">
                        <th class="align-top font-semibold text-md md:text-lg whitespace-nowrap">Themes</th>
                        <th class="align-top font-semibold">&nbsp;:&nbsp;</th>
                        <td class="text-md md:text-lg" v-if="anime.themes?.length">
                            <NuxtLink v-for="(theme, index) in anime.themes" :to="theme.url" :key="theme.mal_id">{{theme.name}}{{ index != anime.themes?.length - 1 ? ", " : "" }}</NuxtLink>
                        </td>
                        <td v-else>
                            None
                        </td>
                    </tr>
                    <tr class="text-left">
                        <th class="align-top font-semibold text-md md:text-lg whitespace-nowrap">Demographic</th>
                        <th class="align-top font-semibold">&nbsp;:&nbsp;</th>
                        <td class="text-md md:text-lg" v-if="anime.demographics?.length">
                            <NuxtLink v-for="(demographic, index) in anime.demographics" :to="demographic.url" :key="demographic.mal_id">{{demographic.name}}{{ index != anime.demographics?.length - 1 ? ", " : "" }}</NuxtLink>
                        </td>
                        <td v-else>
                            None
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="px-3 py-1">
            <p class="text-xl font-semibold">Synopsis</p>
            <p class="whitespace-pre-line text-sm">{{anime.synopsis ?? 'Uknown'}}</p>
        </div>
        <div class="px-3 py-1">
            <p class="text-xl font-semibold">Episodes</p>
            <div class="max-w-fit grid grid-flow-col grid-rows-1 gap-8 my-4 overflow-x-auto remove-scrollbar snap-x snap-mandatory" @mousedown="useDraggable" v-if="episodes.length">
                <Episodes v-for="episode in episodes" :key="episode.mal_id" :episode="episode" :nullImage="anime.images.webp.large_image_url" />
            </div>
            <div v-else>
                <h1 class="text-center">This anime episodes not airied yet</h1>
            </div>
        </div>
        <div class="px-3 py-1">
            <p class="text-xl font-semibold">Characters</p>
            <div class="max-w-fit grid grid-flow-col grid-rows-1 gap-8 my-4 overflow-x-auto remove-scrollbar snap-x snap-mandatory" @mousedown="useDraggable" v-if="characters.length">
                <Characters v-for="character in characters" :key="character.character.mal_id" :character="character" />
            </div>
            <div v-else>
                <h1 class="text-center">This anime characters has not available</h1>
            </div>
        </div>
        <div class="px-3 py-1 loadscroll">
            <div class="flex justify-between items-center">
                <p ref="reviewsDiv" class="text-xl font-semibold">Reviews</p>
                <NuxtLink to="">More Reviews</NuxtLink>
            </div>
            <div v-if="pendingReviews">
                <img src="/img/kuru.gif" alt="loading..." class="w-32 mx-auto">
            </div>
            <div v-if="errorReviews" class="w-full">
                <p class="text-center">Seem Something Wrong</p>
                <button class="mx-auto block px-2 py-1 font-semibold bg-blue-500 rounded-sm" @click="refreshReviews">Try Again</button>
            </div>
            <div v-if="reviews" class="p-2 flex flex-col gap-4">
                <div v-if="!reviews.length">
                    <h1 class="text-center">There no reviews yet</h1>
                </div>
                <Reviews v-else v-for="review in reviews" :key="review.mal_id" :review="review" />
            </div>
        </div>
    </div>
</template>
<script setup>
const loading = useLoading();
loading.value = true;
const { id } = useRoute().params;
const { anime } = await getAnimeById(id);
if (!anime.value) {
    throw createError({statusCode: 404, message: "The Page Doesnt Exists!"})
}
const { episodes } = await getEpisodesById(id);
const { characters } = await getAnimeCharacters(id);
const { reviews, pending: pendingReviews, error: errorReviews, execute: refreshReviews} = await getAnimeReviews(id);

const showTrailer = ref(false);

const reviewsDiv = ref(null);
onMounted(() => {
    useScrollFetch([reviewsDiv.value], async entries => {
        if (entries.target == reviewsDiv.value) {
            await refreshReviews();
        }
    })
})

useHead({
    title: anime.value.title,
    meta: [
        {
            name: 'description', content: anime.value.synopsis,
            name: 'keywords', content: anime.value.title
        }
    ]
})
useSeoMeta({
    title: anime.value.title,
    description: anime.value.synopsis,
    ogDescription: anime.value.synopsis,
    ogTitle: anime.value.title,
    ogImage: anime.value.images.webp.large_image_url,
    applicationName: 'My Anime List Lite',
    ogType: 'website',
    twitterCard: 'app',
    twitterTitle: anime.value.title,
    twitterDescription: anime.value.synopsis,
    twitterImage: anime.value.images.webp.large_image_url,
    twitterImageType: 'image/jpeg',
    twitterImageAlt: anime.value.title,
})
loading.value = false;
</script>