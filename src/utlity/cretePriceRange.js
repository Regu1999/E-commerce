export const splitPriceRange = (start, end, step) => {
    const priceRange = [];
    for (let i = start; i < end; i += step) {
        if (priceRange.length === 0) {
            priceRange.push(`Under ${Math.min(i + step, end)}`)
        } else {
            priceRange.push(`${i} - ${Math.min(i + step, end)}`)
        }
    }
    return priceRange

}