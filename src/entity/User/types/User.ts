export type User = {
    id: string;
    name: string;
    role: UserRoles[];
};

export enum UserRoles {
    ADMIN = "admin",
}

export interface JwtPayload extends User {
    id: string;
    name: string;
    role: UserRoles[];
    expires: number;
}
