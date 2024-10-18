import { useEffect, useState } from "react";
import { ResponseType } from "shared/types/Response";

export const useLoading = <T>(
    callback: (...args: any[]) => Promise<ResponseType<T>>,
    args?: any[],
    doAfter?: (result: ResponseType<T>) => void
) => {
    if (!args) args = [];
    if (!doAfter) doAfter = () => {};

    const [isLoading, setIsLoading] = useState(true);
    const [result, setResult] = useState<ResponseType<T>>(null);
    useEffect(() => {
        callback(...args).then((value) => {
            setIsLoading(false);
            setResult(value);
            doAfter(value);
        });
    }, []);

    return { isLoading, result };
};
