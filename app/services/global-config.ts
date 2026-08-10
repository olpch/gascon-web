import { CurrentUser } from "../lib/models";




export function getConfigValue(key: string, defaultValue = null) {
    if (typeof window === "undefined") return defaultValue;
    const data = localStorage.getItem(key);
    try {
        return data ? JSON.parse(data) : defaultValue;
    } catch(error) {
        console.error(error, data);
    }
}

export function setConfigValue(key: string, value = {}) {
    if (typeof window === "undefined") return;
    const stringifyData = JSON.stringify(value);
    localStorage.setItem(key, stringifyData);
}

export function removeConfig(key: string) {
    if (typeof window === "undefined") return;
    localStorage.removeItem(key);
}

export function setLocalUser(cuser: CurrentUser) {
    return setConfigValue('cuser', cuser);
}

export function getLocalUser() {
    return getConfigValue('cuser');
}

export function removeLocalUser() {
    removeConfig('cuser');
}

export function getLanguageId() {
    return  getConfigValue('language');
}

export async function getLocalDictionaries() {
    const localDictionaries = getConfigValue('dictionaries');
    if(!!localDictionaries) return localDictionaries;
    const remote = await getLanguage();
    setConfigValue('dictionaries', remote.dictionaries)
    return remote.dictionaries;

}

export async function getLanguage() {
    const response = await fetch(`/api/languages`, {
        method: "GET",
        headers: {"Content-Type": "application/json"}
    });
    if (!response.ok) {
        return [];
    }

    return response.json();
}