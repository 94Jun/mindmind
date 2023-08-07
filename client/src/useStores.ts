import { MobXProviderContext } from 'mobx-react';
import { useContext } from 'react';
import Program from './Program';

const useStores = (): Program => {
    return useContext(MobXProviderContext) as Program;
};
export default useStores;
