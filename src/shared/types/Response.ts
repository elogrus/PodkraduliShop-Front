export type ResponseType<T> = {
    error: boolean;
    errorMessage?: string;
    data?: T;
} 