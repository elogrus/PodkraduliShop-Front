export type User = {
    id: string;
    name: string;
    role: UserRoles[];
};

export enum UserRoles {
    USER = "user",
    ADMIN = "admin",
}

export interface JwtPayload extends User {
    id: string;
    name: string;
    role: UserRoles[];
}
