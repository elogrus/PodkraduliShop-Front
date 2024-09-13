import * as cls from './App.module.scss';
import { Pages } from 'shared/config/Pages';
import { Navbar } from 'widgets/Navbar';
import { LoadingPage } from 'pages/LoadingPage';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Footer } from 'widgets/Footer';
import { Providers } from './providers';

export const App = () => {
    return (
        <Providers>
            <div className={cls.App}>
                <Navbar />
                <Suspense fallback={<LoadingPage />}>
                    <Routes>
                        {Pages.map((page) => {
                            return <Route key={page.name} path={page.path} element={page.element} />
                        })}
                    </Routes>
                </Suspense>
                <Footer />
            </div>
        </Providers>
    );
};
