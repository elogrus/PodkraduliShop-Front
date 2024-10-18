import { validate } from "shared/lib/validate";

export const validateName = (name: string) => {
    return validate([Boolean(name)]);
};

export const validatePassword = (password: string) => {
    return validate([Boolean(password)]);
};

export const validateAll = (
    name: string,
    password: string
): { fail: boolean; name: number | true; password: number | true } => {
    const result: ReturnType<typeof validateAll> = {
        fail: false,
        name: validateName(name),
        password: validatePassword(password),
    };

    if (!result.name || !result.password) {
        result.fail = true;
    }

    return result;
};
