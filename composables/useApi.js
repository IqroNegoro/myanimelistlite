const baseURL = 'https://api.jikan.moe/v4/';

export const useApi = async (url, options) => {
    return await useFetch(baseURL + url, options)
}