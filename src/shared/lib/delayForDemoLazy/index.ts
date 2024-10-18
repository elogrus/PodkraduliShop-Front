export function delayForDemoLazy(promise: any) {
    return new Promise(resolve => {
        setTimeout(resolve, 800);
    }).then(() => promise);
}