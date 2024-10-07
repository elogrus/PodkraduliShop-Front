export interface IValidateResult {
    failed: boolean;
    name: boolean;
    password: boolean;
    confirmPassword: boolean;
}

export const validateData: (
    name: string,
    password: string,
    confirmPassword: string
) => IValidateResult = (name, password, confirmPassword) => {
    const result: IValidateResult = {
        failed: false,
        name: true,
        password: true,
        confirmPassword: true,
    };

    if (!name) {
        result.name = false;
        result.failed = true;
    }
    if (!password) {
        result.password = false;
        result.failed = true;
    }
    if (confirmPassword !== null) {
        if (!confirmPassword || confirmPassword !== password) {
            result.confirmPassword = false;
            result.failed = true;
        }
    }
    return result;
};
