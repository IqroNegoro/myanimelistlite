export const capitalizeFirst = text => {
    return text ? text.replace(/^[a-zA-Z0-9]/gi, x => x.toUpperCase()) : text;
}