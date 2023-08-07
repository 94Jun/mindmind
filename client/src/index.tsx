import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'mobx-react';
import Program from './Program';

const program: Program = new Program();

const start = async () => {
    const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
    root.render(
        <Provider {...program}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Provider>
    );
};

start();
