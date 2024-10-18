import axios from "axios";
import { updateToken } from "entity/User/lib/actions";
import { setUserByJwt } from "entity/User/slice/UserSlice";
import { LoadingPage } from "pages/LoadingPage";
import { Suspense, useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Pages } from "shared/config/Pages";
import { LocalStorageKeys } from "shared/consts/localStorage";
import { Footer } from "widgets/Footer";
import { Navbar } from "widgets/Navbar";
import * as cls from "./App.module.scss";
import { useAppDispatch } from "./store/store";
import { injectStyle } from "react-toastify/dist/inject-style";

injectStyle();
export const App = () => {
    const dispatch = useAppDispatch();
    const noAuthResponseRetry = useRef(false);
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
        axios.defaults.withCredentials = true;
        axios.interceptors.response.use(undefined, (error) => {
            if (error.status == 401 && !noAuthResponseRetry.current) {
                noAuthResponseRetry.current = true;
                updateToken();
            }
            return Promise.reject(error);
        });
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
