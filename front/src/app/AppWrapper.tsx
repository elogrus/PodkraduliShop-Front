import { App } from './App';
import { Providers } from './providers';

export const AppWrapper = () => {
    return (
        <Providers>
            <App />
        </Providers>
    );
};
