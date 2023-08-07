import { Footer, Header } from '../index';

export interface LayoutProps {
    children?: JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
