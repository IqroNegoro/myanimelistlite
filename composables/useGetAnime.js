// export const getRecommendationsAnime = async () => {
//     const {data: recommendationsAnime, pendingRecommendations} = await useApi(`recommendations/anime`, {
//         transform: ({data}) => {
//             console.log(data)
//             let array = [];
//             for (let x of data.slice(0,5)) {
//                 array.push(...x.entry)
//             }
            
//             return array;
//         },
//         params: {

//         }
//     });

//     return { recommendationsAnime, pendingRecommendations }
// }
    
export const getTopAnime = async () => {
    const {data: topAnime, pendingTop, error, refresh} = await useApi(`top/anime`, {
        transform: res => res.data
    });

    return { topAnime, pendingTop }
}

export const getAnimeSeason = async () => {
    const {data: animeSeasonNow, pendingSeasonNow} = await useApi(`seasons/now`, {
        transform: res => res.data,
        params: {
            sfw: ''
        }
    });

    return { animeSeasonNow, pendingSeasonNow }
}

export const getAnimeById = async id => {
    const { data: anime, pendingAnimeId } = await useApi(`anime/${id}/full`, {
        transform: res => res.data
    })

    return { anime, pendingAnimeId }
}

export const getEpisodesById = async id => {
    const { data: episodes } = await useApi(`anime/${id}/videos/episodes`, {
        transform: res => res.data.reverse()
    });

    return { episodes };
}

export const getAnimeCharacters = async id => {
    const { data: characters } = await useApi(`anime/${id}/characters`, {
        transform: res => {
            let { data } = res;
            data.forEach(v => v.voice_actors = v.voice_actors.filter(v => v.language == 'Japanese')[0])
            return data;
        }
    })
    return { characters }
}

export const getAnimeReviews = async id => {
    const { data: reviews, pending, error, execute } = await useApi(`anime/${id}/reviews`, {
        transform: res => res.data.slice(0,3),
        immediate: false
    })

    return { reviews, pending, error, execute}
}