import { createContext, useContext, useState, useEffect } from 'react';
import { auth, db } from '../config/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { getCapabilities, getScope, getLabel } from '../config/roles';

const UserContext = createContext();

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userLevel, setUserLevel] = useState(null);
    const [department, setDepartment] = useState(null);
    const [capabilities, setCapabilities] = useState([]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                try {
                    const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
                    if (userDoc.exists()) {
                        const userData = userDoc.data();
                        setUser({
                            ...firebaseUser,
                            ...userData
                        });
                        setUserLevel(userData.level);
                        setDepartment(userData.department);
                        setCapabilities(getCapabilities(userData.level));
                    }
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            } else {
                setUser(null);
                setUserLevel(null);
                setDepartment(null);
                setCapabilities([]);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const value = {
        user,
        loading,
        userLevel,
        department,
        capabilities,
        scope: getScope(userLevel),
        roleLabel: getLabel(userLevel),
        isAuthenticated: !!user,
    };

    return (
        <UserContext.Provider value={value}>
            {!loading && children}
        </UserContext.Provider>
    );
};

export default UserContext; 