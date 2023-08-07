import { HomePage } from './pages';
import { MUserLevel } from './types/usertype';

export interface MRoutes {
    path: string;
    component: () => JSX.Element;
    level: MUserLevel;
}

export const routes: Array<MRoutes> = [
    {
        path: '/',
        component: HomePage,
        level: MUserLevel.nonMember,
    },
];
