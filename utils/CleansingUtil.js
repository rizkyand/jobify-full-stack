//convert any string to first letter only uppercase
export const firstLetterOnly = (strIn) => {
    const res = strIn.split(' ').map(e => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join(' ');
    return res;
}