export const getAnimes = async () => await useApi(`recommendations/anime`, {
    default: () => []
});

export const getTopAnimes = async () => await useApi(`top/anime`, {
    default: () => []
});

export const getSeasonNow = async () => await useApi(`seasons/now`, {
    pick: ["data"],
    default: () => {}
})

export const getUpcomingSeason = async () => await useApi(`seasons/upcoming`, {
    pick: ["data"],
    default: () => {}
})

export const getAnimeById = async id => await useApi(`anime/${id}`, {
    pick: ["data"],
    default: () => {}
})

export const searchAnime = async options => await useApi(`anime`, {
    ...options,
    sfw: true,
    order_by: "rank",
    sort: "desc",
    default: () => {},
    immediate: false
})