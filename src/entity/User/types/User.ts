export type User = {
    id: string;
    name: string;
    role: UserRole;
    about: string;
};

export enum UserRole {
    USER = "user",
    ADMIN = "admin",
}

export interface JwtPayload extends User {}
