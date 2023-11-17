export const getAnimes = async () => await useApi(`recommendations/anime`, {
    default: () => []
});

export const getTopAnimes = async () => await useApi(`top/anime`, {
    default: () => [],
    transform: res => res.data,
    lazy: true
});

export const getSeasonNow = async () => await useApi(`seasons/now`, {
    default: () => {},
    transform: res => res.data,
    lazy: true
})

export const getUpcomingSeason = async () => await useApi(`seasons/upcoming`, {
    default: () => {},
    transform: res => res.data,
    lazy: true
})

export const searchAnime = async options => await useApi(`anime`, {
    ...options,
    sfw: true,
    order_by: "rank",
    sort: "desc",
    default: () => {},
    immediate: false
})

export const getAnimeById = async id => await useApi(`anime/${id}/full`, {
    default: () => {},
    transform: res => res.data
})

export const getAnimeVideos = async id => await useApi(`anime/${id}/videos/episodes`, {
    default: () => {},
    transform: res => res.data.reverse()
})

export const getAnimeCharacters = async id => await useApi(`anime/${id}/characters`, {
    default: () => {},
    transform: res => res.data
})

export const getAnimePictures = async id => await useApi(`anime/${id}/pictures`, {
    default: () => {},
    transform: res => res.data,
    // lazy: true
})