export interface IValidateResultPassword {
    failed: boolean;
    oldPassword: boolean;
    password: boolean;
    confirmPassword: boolean;
}

export const validatePassword: (
    oldPassword: string,
    password: string,
    confirmPassword: string
) => IValidateResultPassword = (oldPassword, password, confirmPassword) => {
    const result: IValidateResultPassword = {
        failed: false,
        oldPassword: true,
        password: true,
        confirmPassword: true,
    };
    if (!oldPassword) {
        result.oldPassword = false;
        result.failed = true;
    }
    if (!password) {
        result.password = false;
        result.failed = true;
    }
    if (!confirmPassword || confirmPassword !== password) {
        result.confirmPassword = false;
        result.failed = true;
    }

    return result;
};
