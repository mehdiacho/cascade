import { useUser } from '../context/UserContext';
import { hasCapability, hasAccess } from '../config/roles';

export const useRoleAccess = () => {
    const { userLevel } = useUser();

    return {
        canAccess: (requiredLevel) => hasAccess(userLevel, requiredLevel),
        hasCapability: (capability) => hasCapability(userLevel, capability),
        isSuper: () => userLevel === 'SUPER',
        isL2: () => userLevel === 'L2',
        isL1: () => userLevel === 'L1',
        isL0: () => userLevel === 'L0',
    };
};

export default useRoleAccess; 