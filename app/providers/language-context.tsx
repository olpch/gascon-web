// contexts/language-context.tsx

"use client";

import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
    ReactNode,
} from "react";
import { Dictionary } from "../lib/models";
import { getLocalDictionaries } from "../services/global-config";

type Language = "es" | "en";
type ContextType = {
    language: Language;
    dictionary: Dictionary | null;
    t: (path: string) => string;
    tlocal: (textEn: string, textEs: string) => string;
    setLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<ContextType | null>(null);

export function LanguageProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [language, setLanguage] = useState<Language>("en");
    const [dictionaries, setDictionaries] = useState<Record<Language, Dictionary> | null>(null);

    useEffect(() => {
        getLocalDictionaries().then(setDictionaries);
    }, []);

    useEffect(() => {
        const saved = localStorage.getItem("language");
        if (saved === "es" || saved === "en") {
            setLanguage(saved);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("language", language);
    }, [language]);

    const getLabel = (obj: any, path: string) => {
        return path.split(".")
            .reduce((acc, key) => acc?.[key], obj);
    }

    const value = useMemo(
        () => ({
            language,
            dictionary: dictionaries?.[language] ?? null,
            setLanguage,
            t: (path: string) => {
                const label = getLabel(dictionaries?.[language], path);
                if (!!label && typeof label === 'string') {
                    return label.replace(/\\n/g, "\n")
                }
                return path;
            },
            tlocal: (textEn: string, textEs: string) => {
                return (language === 'en') ? textEn : textEs;
            },
        }),
        [language, dictionaries]
    );

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error("useLanguage debe estar dentro del LanguageProvider");
    }

    return context;
}