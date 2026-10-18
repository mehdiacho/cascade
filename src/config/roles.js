export const USER_LEVELS = {
    L0: 'L0',
    L1: 'L1',
    L2: 'L2',
    SUPER: 'SUPER'
};

export const roleConfig = {
    [USER_LEVELS.L0]: {
        components: ['TaskList', 'PersonalStats', 'DepartmentView'],
        capabilities: ['viewTasks', 'completeTasks'],
        metrics: ['personalPerformance', 'taskCompletion'],
        scope: 'individual',
        label: 'Task Executor'
    },
    [USER_LEVELS.L1]: {
        components: ['DepartmentDashboard', 'TaskAssignment', 'TeamStats'],
        capabilities: ['assignTasks', 'viewDepartment', 'generateReports'],
        metrics: ['departmentPerformance', 'teamMetrics'],
        scope: 'department',
        label: 'Department Head'
    },
    [USER_LEVELS.L2]: {
        components: ['OrganizationView', 'DepartmentAssignment', 'GlobalStats'],
        capabilities: ['assignDepartments', 'viewAll', 'generateReports'],
        metrics: ['organizationMetrics', 'crossDepartmental'],
        scope: 'organization',
        label: 'General Manager'
    },
    [USER_LEVELS.SUPER]: {
        components: ['SystemConfig', 'UserManagement', 'Analytics'],
        capabilities: ['all'],
        metrics: ['system', 'users', 'performance'],
        scope: 'system',
        label: 'Administrator'
    }
};

export const getScope = (userLevel) => roleConfig[userLevel]?.scope || 'individual';
export const getCapabilities = (userLevel) => roleConfig[userLevel]?.capabilities || [];
export const getMetrics = (userLevel) => roleConfig[userLevel]?.metrics || [];
export const getLabel = (userLevel) => roleConfig[userLevel]?.label || 'User';

export const hasCapability = (userLevel, capability) => {
    const capabilities = getCapabilities(userLevel);
    return capabilities.includes('all') || capabilities.includes(capability);
};

export const hasAccess = (userLevel, requiredLevel) => {
    const levels = Object.values(USER_LEVELS);
    const userIndex = levels.indexOf(userLevel);
    const requiredIndex = levels.indexOf(requiredLevel);
    return userLevel === USER_LEVELS.SUPER || (userIndex >= 0 && userIndex >= requiredIndex);
}; 