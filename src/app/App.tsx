import { setUserByJwt } from "entity/User/slice/UserSlice";
import { LoadingPage } from "pages/LoadingPage";
import { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import { Pages } from "shared/config/Pages";
import { LocalStorageKeys } from "shared/consts/localStorage";
import { Footer } from "widgets/Footer";
import { Navbar } from "widgets/Navbar";
import * as cls from "./App.module.scss";
import { setupAxios } from "./lib/setupAxios";
import { useAppDispatch } from "./store/store";

setupAxios();
injectStyle();
export const App = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (localStorage[LocalStorageKeys.AUTH_TOKEN]) {
            try {
                dispatch(
                    setUserByJwt(localStorage[LocalStorageKeys.AUTH_TOKEN])
                );
            } catch (error) {
                localStorage.removeItem(LocalStorageKeys.AUTH_TOKEN);
            }
        }
    }, []);
    return (
        <div className={cls.App}>
            <Navbar />
            <Suspense fallback={<LoadingPage />}>
                <ToastContainer pauseOnFocusLoss={false} pauseOnHover={false} />
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
