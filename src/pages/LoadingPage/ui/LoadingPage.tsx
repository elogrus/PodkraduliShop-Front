import { Loader } from 'shared/ui/Loader/Loader';
import * as cls from './LoadingPage.module.scss';

export const LoadingPage = () => {
    return (
        <div className={cls.LoadingPage}>
            <Loader />
        </div>
    );
};
