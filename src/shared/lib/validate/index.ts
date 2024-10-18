export const validate = (bools: boolean[]) => {
    for (let i = 0 ; i < bools.length ; i++) {
        if (!bools[i]) return i;
    }
    return true;
}