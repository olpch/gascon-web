"use client";

import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
    ReactNode,
    useCallback,
} from "react";
import { getLocalUser, removeLocalUser } from "../services/global-config";
import { CurrentUser } from "../lib/models";

type ContextType = {
    currentUser: CurrentUser | null;
    isLoading: boolean;
    logout: () => void;
    isAdminLoading: boolean;
    setIsAdminLoading: (sw: boolean) => void;
};

const AdminContext = createContext<ContextType | null>(null);


export function AdminProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isAdminLoading, setIsAdminLoading] = useState(false);

    const logout = useCallback(() => {
        removeLocalUser();
        setCurrentUser(null);
    }, []);

    useEffect(() => {
        const user = getLocalUser();
        setCurrentUser(user);
        setIsLoading(false);
        console.log('cargando el usuario', { currentUser, user, isLoading, newIsLoading: false });
    }, []);

    const value = useMemo(
        () => ({
            currentUser,
            isLoading,
            logout,
            isAdminLoading,
            setIsAdminLoading,
        }),
        [currentUser, logout, isLoading, isAdminLoading]
    );

    return (
        <AdminContext.Provider value={value}>
            {children}
        </AdminContext.Provider>
    );
}

export function useAdminContext() {
    const context = useContext(AdminContext);

    if (!context) {
        throw new Error("useAdminContext debe estar dentro del AdminProvider");
    }

    return context;
}