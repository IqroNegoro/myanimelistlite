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
    const {data: topAnime, pendingTop} = await useApi(`top/anime`, {
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
    const { data, pendingAnimeId } = await useApi(`anime/${id}/full`, {
        transform: res => res.data
    })

    return { data, pendingAnimeId }
}