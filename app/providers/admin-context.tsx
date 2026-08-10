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
};

const AdminContext = createContext<ContextType | null>(null);


export function AdminProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    
    const logout = useCallback(() => {
        removeLocalUser();
        setCurrentUser(null);
    }, []);

    useEffect(() => {
        const user = getLocalUser();
        setCurrentUser(user);
        setIsLoading(false);
    }, []);

    const value = useMemo(
        () => ({
            currentUser,
            isLoading,
            logout,
        }),
        [currentUser, logout, isLoading]
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