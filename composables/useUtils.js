export const capitalize = string => string ? string.replace(/^\w/gi, x => x.toUpperCase()) : '';

export const pascalCase = string => string ? string.replace(/_/gi, x => " ").replace(/^\w|\s+\w/gi, x => x.toUpperCase()) : "";