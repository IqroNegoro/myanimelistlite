export const capitalizeFirst = text => {
    return text.replace(/^[a-zA-Z0-9]/gi, x => x.toUpperCase());
}