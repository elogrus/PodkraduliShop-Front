import { useAppDispatch } from "app/store/store";
import { Paths } from "shared/config/Paths";
import { LocalStorageKeys } from "shared/consts/localStorage";
import { setUserByJwt } from "../slice/UserSlice";
import {
    authReq,
    changeAboutReq,
    changeNameReq,
    changePasswordReq,
    getUserProfileInfoReq,
    updateTokenReq,
} from "./requests";

export const auth = async (
    name: string,
    password: string,
    isRegister: boolean,
    onError: (result: Awaited<ReturnType<typeof authReq>>) => void,
    onSuccess: (result: Awaited<ReturnType<typeof authReq>>) => void,
    dispatch: ReturnType<typeof useAppDispatch>
) => {
    const result = await authReq(name, password, isRegister);
    if (result.error) {
        onError(result);
        return;
    }
    dispatch(setUserByJwt(result.data.access));
    localStorage.setItem(LocalStorageKeys.AUTH_TOKEN, result.data.access);
    onSuccess(result);
};

export const changePassword = async (
    oldPassword: string,
    newPassword: string,
    onError: (result: Awaited<ReturnType<typeof changePasswordReq>>) => void,
    onSuccess: (result: Awaited<ReturnType<typeof changePasswordReq>>) => void,
    dispatch: ReturnType<typeof useAppDispatch>
) => {
    const result = await changePasswordReq(oldPassword, newPassword);
    if (result.error) {
        onError(result);
        return;
    }
    dispatch(setUserByJwt(result.data.access));
    localStorage.setItem(LocalStorageKeys.AUTH_TOKEN, result.data.access);
    onSuccess(result);
};

export const changeName = async (
    name: string,
    onError: (result: Awaited<ReturnType<typeof changeNameReq>>) => void,
    onSuccess: (result: Awaited<ReturnType<typeof changeNameReq>>) => void,
    dispatch: ReturnType<typeof useAppDispatch>
) => {
    const result = await changeNameReq(name);
    if (result.error) {
        onError(result);
        return;
    }
    dispatch(setUserByJwt(result.data.access));
    localStorage.setItem(LocalStorageKeys.AUTH_TOKEN, result.data.access);
    onSuccess(result);
};

export const changeAbout = async (
    name: string,
    onError: (result: Awaited<ReturnType<typeof changeAboutReq>>) => void,
    onSuccess: (result: Awaited<ReturnType<typeof changeAboutReq>>) => void,
    dispatch: ReturnType<typeof useAppDispatch>
) => {
    const result = await changeAboutReq(name);
    if (result.error) {
        onError(result);
        return;
    }
    dispatch(setUserByJwt(result.data.access));
    localStorage.setItem(LocalStorageKeys.AUTH_TOKEN, result.data.access);
    onSuccess(result);
};

export const getUserProfileInfo = async (
    userId: string,
    onError: (
        result: Awaited<ReturnType<typeof getUserProfileInfoReq>>
    ) => void,
    onSuccess: (
        result: Awaited<ReturnType<typeof getUserProfileInfoReq>>
    ) => void
) => {
    const result = await getUserProfileInfoReq(userId);
    if (result.error) {
        onError(result);
        return;
    }
    onSuccess(result);
};

export const updateToken = async () => {
    const result = await updateTokenReq();
    if (result.error) {
        localStorage.removeItem(LocalStorageKeys.AUTH_TOKEN);
        window.location.replace(Paths.AUTH_PATH);
        return;
    }
    localStorage.setItem(LocalStorageKeys.AUTH_TOKEN, result.data.access);
    window.location.reload();
};
