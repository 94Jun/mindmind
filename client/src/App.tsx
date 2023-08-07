import { observer } from 'mobx-react';
import Program from './Program';
import useStores from './useStores';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { MRoutes, routes } from './routes';
import { Layout } from './components';
import './styles/tailwind.css';

const App = observer(() => {
    const program: Program = useStores();

    //권한에 따른 Route 구분

    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    {routes.map((value: MRoutes) => {
                        return <Route key={value.path} path={value.path} element={<value.component />} />;
                    })}
                    <Route path="/*" element={<Navigate to={'/'} />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
});

export default App;
