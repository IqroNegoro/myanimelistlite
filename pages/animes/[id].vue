<template>
    <div class="flex flex-col gap-8 pb-4">
        <div class="p-12 rounded-b-md flex flex-col md:flex-row justify-around gap-4 h-screen" :style="{'background': `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${videos?.[0]?.images?.jpg?.image_url ?? anime.images?.webp?.large_image_url})`}" style="background-repeat: no-repeat; background-position: top; background-size: cover;">
            <div class="flex flex-col gap-2 max-md:hidden md:w-96">
                <h1 class="font-semibold text-xl md:text-4xl">
                    {{ anime.title }}
                </h1>
                <table class="table-auto max-md:hidden whitespace-nowrap">
                    <tbody class="align-text-top">
                        <tr>
                            <td>Rank</td>
                            <td>&nbsp; : &nbsp;</td>
                            <td>#{{anime.rank}}</td>
                        </tr>
                        <tr>
                            <td>Popularity</td>
                            <td>&nbsp; : &nbsp;</td>
                            <td>#{{anime.popularity}}</td>
                        </tr>
                        <tr>
                            <td>Favorites</td>
                            <td>&nbsp; : &nbsp;</td>
                            <td>{{anime.favorites}}</td>
                        </tr>
                        <tr>
                            <td>Score</td>
                            <td>&nbsp; : &nbsp;</td>
                            <td>{{anime.score}}</td>
                        </tr>
                        <tr>
                            <td>Episodes</td>
                            <td>&nbsp; : &nbsp;</td>
                            <td>{{anime.episodes}}</td>
                        </tr>
                        <tr>
                            <td>Duration</td>
                            <td>&nbsp; : &nbsp;</td>
                            <td>{{anime.duration}}</td>
                        </tr>
                        <tr>
                            <td>Year</td>
                            <td>&nbsp; : &nbsp;</td>
                            <td>{{anime.year}}</td>
                        </tr>
                        <tr>
                            <td>Genres</td>
                            <td>&nbsp; : &nbsp;</td>
                            <td>
                                <span v-for="(genre, i) in anime.genres" :key="genre.mal_id"> {{ genre.name }} {{ i == anime.genres.length - 1 ? '' : '| ' }} </span>
                            </td>
                        </tr>
                        <tr>
                            <td>Season</td>
                            <td>&nbsp; : &nbsp;</td>
                            <td>{{capitalize(anime.season)}}</td>
                        </tr>
                        <tr>
                            <td>Source</td>
                            <td>&nbsp; : &nbsp;</td>
                            <td>{{anime.source}}</td>
                        </tr>
                        <tr>
                            <td>Rating</td>
                            <td>&nbsp; : &nbsp;</td>
                            <td>{{anime.rating}}</td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            <td>&nbsp; : &nbsp;</td>
                            <td>{{anime.status}}</td>
                        </tr>
                        <tr>
                            <td>Airing</td>
                            <td>&nbsp; : &nbsp;</td>
                            <td>{{anime.aired.string}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <img :src="anime.images?.webp?.large_image_url ?? anime.images?.jpg?.large_image_url" :alt="anime.title" class="max-md:-order-1 rounded-md w-max max-md:mx-auto">
        </div>
        <div class="flex flex-col gap-2 md:hidden justify-center items-center">
            <h1 class="font-semibold text-xl md:text-4xl">
                {{ anime.title }}
            </h1>
            <table class="table-auto">
                <tbody class="align-text-top">
                    <tr>
                        <td>Rank</td>
                        <td>&nbsp; : &nbsp;</td>
                        <td>#{{anime.rank}}</td>
                    </tr>
                    <tr>
                        <td>Popularity</td>
                        <td>&nbsp; : &nbsp;</td>
                        <td>#{{anime.popularity}}</td>
                    </tr>
                    <tr>
                        <td>Favorites</td>
                        <td>&nbsp; : &nbsp;</td>
                        <td>{{anime.favorites}}</td>
                    </tr>
                    <tr>
                        <td>Score</td>
                        <td>&nbsp; : &nbsp;</td>
                        <td>{{anime.score}}</td>
                    </tr>
                    <tr>
                        <td>Episodes</td>
                        <td>&nbsp; : &nbsp;</td>
                        <td>{{anime.episodes}}</td>
                    </tr>
                    <tr>
                        <td>Duration</td>
                        <td>&nbsp; : &nbsp;</td>
                        <td>{{anime.duration}}</td>
                    </tr>
                    <tr>
                        <td>Year</td>
                        <td>&nbsp; : &nbsp;</td>
                        <td>{{anime.year}}</td>
                    </tr>
                    <tr>
                        <td>Genres</td>
                        <td>&nbsp; : &nbsp;</td>
                        <td>
                            <span v-for="(genre, i) in anime.genres" :key="genre.mal_id"> {{ genre.name }} {{ i == anime.genres.length - 1 ? '' : '| ' }} </span>
                        </td>
                    </tr>
                    <tr>
                        <td>Season</td>
                        <td>&nbsp; : &nbsp;</td>
                        <td>{{capitalize(anime.season)}}</td>
                    </tr>
                    <tr>
                        <td>Source</td>
                        <td>&nbsp; : &nbsp;</td>
                        <td>{{anime.source}}</td>
                    </tr>
                    <tr>
                        <td>Rating</td>
                        <td>&nbsp; : &nbsp;</td>
                        <td>{{anime.rating}}</td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td>&nbsp; : &nbsp;</td>
                        <td>{{anime.status}}</td>
                    </tr>
                    <tr>
                        <td>Airing</td>
                        <td>&nbsp; : &nbsp;</td>
                        <td>{{anime.aired.string}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="text-center">
            <h1 class="font-semibold text-2xl" id="synopsis">Synopsis</h1>
            <p class="whitespace-pre-line text-center text-sm p-4">
                {{ anime.synopsis }}
            </p>
        </div>
        <div class="text-center">
            <h1 class="font-semibold text-2xl" id="episodes">Episodes</h1>
            <p v-if="!videos.length" class="my-4">Episodes not airied yet</p>
            <div v-else class="flex flex-row gap-4 px-4 overflow-y-auto py-2 snap-x snap-proximity">
                <AnimeEpisode v-for="episode in videos" :key="episode.mal_id" :episode="episode" />
            </div>
        </div>
        <div class="text-center">
            <h1 class="font-semibold text-2xl" id="characters">Characters</h1>
            <p v-if="!characters.length" class="my-4">There's no characters</p>
            <div v-else class="flex flex-row gap-4 px-4 overflow-y-auto py-2 snap-x snap-proximity">
                <AnimeCharacter v-for="character in characters" :key="character.mal_id" :character="character" />
            </div>
        </div>
        <div class="text-center">
            <h1 class="font-semibold text-2xl" id="characters">Galleries</h1>
            <p v-if="!pictures.length" class="my-4">There's no pictures</p>
            <div v-else class="flex flex-row gap-4 px-4 overflow-y-auto py-2 snap-x snap-proximity">
                <img v-for="(picture, i) in pictures" :key="i" :src="picture.webp?.large_image_url ?? picture.jpg?.large_image_url" class="aspect-auto w-48 object-cover hover:-translate-y-2 transition-all duration-150 rounded-md cursor-pointer" draggable="false" @click="e => selectedPicture = e.target.src">
            </div>
        </div>
    </div>
    <div v-if="selectedPicture" class="fixed top-0 left-0 w-full h-full bg-black/75 flex justify-center items-center" @click="selectedPicture = null">
        <img :src="selectedPicture">
    </div>
</template>
<script setup>
const selectedPicture = ref(null);

const { id } = useRoute().params;

const { data: anime } = await getAnimeById(id);
const { data: videos } = await getAnimeVideos(id);
const { data: characters } = await getAnimeCharacters(id);
const { data: pictures } = await getAnimePictures(id);
console.log(pictures.value)
onMounted(() => {
})

useHead({
    title: anime.value.title,
});

useSeoMeta({
    title: anime.value.title,
    ogTitle: anime.value.title,
    description: anime.value.synopsis,
    ogDescription: anime.value.synopsis,
    ogImage: anime.value.images?.webp?.large_image_url ?? anime.value.images?.jpg?.large_image_url,
    twitterCard: 'summary_large_image'
});

</script>