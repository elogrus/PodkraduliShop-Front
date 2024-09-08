import * as cls from './App.module.scss';
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import { Navbar } from 'widgets/Navbar';
import { Pages } from 'shared/config/Pages';

interface AppProps {
    className?: string;
}
export const App = () => {
    return (
        <BrowserRouter>
            <div className={cls.App}>
                <Navbar />
                <Routes>
                    {Pages.map((page) => {
                        return <Route key={page.name} path={page.path} element={page.element} />
                    })}
                </Routes>
            </div>
        </BrowserRouter>

    );
};
