import { setUserByJwt } from "entity/User/slice/UserSlice";
import { LoadingPage } from "pages/LoadingPage";
import { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Pages } from "shared/config/Pages";
import { LocalStorageKeys } from "shared/consts/localStorage";
import { Footer } from "widgets/Footer";
import { Navbar } from "widgets/Navbar";
import * as cls from "./App.module.scss";
import { useAppDispatch } from "./store/store";

export const App = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (localStorage[LocalStorageKeys.AUTH_TOKEN])
            dispatch(setUserByJwt(localStorage[LocalStorageKeys.AUTH_TOKEN]));
    }, []);
    return (
        <div className={cls.App}>
            <Navbar />
            <Suspense fallback={<LoadingPage />}>
                <Routes>
                    {Pages.map((page) => {
                        return (
                            <Route
                                key={page.name}
                                path={page.path}
                                element={page.element}
                            />
                        );
                    })}
                </Routes>
            </Suspense>
            <Footer />
        </div>
    );
};
