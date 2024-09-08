export const compareClasses = (
    cls: string,
    mods?: Record<string, boolean>,
    additionalCls?: Array<string>
): string => {
    let result = cls

    for (const mode in mods) {
        if (mods[mode]) result += ' ' + mode
    }

    if (additionalCls) result += ' ' + additionalCls.join(' ')

    return result
}

export const cmpc = compareClasses;
