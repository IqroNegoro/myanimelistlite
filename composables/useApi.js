export default async (url, options) => await useFetch(url, {
    ...options,
    baseURL: "https://api.jikan.moe/v4/"
})