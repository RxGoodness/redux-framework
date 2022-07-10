export const increment = (byMultiple) => {
    return {
        type: 'INCREMENT',
        payload: byMultiple
    }
}
export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}
