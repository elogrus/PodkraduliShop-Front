import { useEffect, useState } from "react"
import { ResponseType } from "shared/types/Response"

export const useLoading = <T>(callback: () => Promise<ResponseType<T>>) => {
    const [isLoading, setIsLoading] = useState(true)
    const [result, setResult] = useState<ResponseType<T>>(null)
    useEffect(() => {
        callback().then((value) => {
            setIsLoading(false)
            setResult(value)
        })
    }, [])

    return { isLoading, result }
}