export type User = {
    id: string;
    name: string;
    role: UserRole;
};

export enum UserRole {
    USER = "user",
    ADMIN = "admin",
}

export interface JwtPayload extends User {}
