import { CurrentUser, Dictionary } from "../lib/models";
import { getLanguage, setLanguage } from "./language";




export function getConfigValue(key: string, defaultValue = null) {
    if (typeof window === "undefined") return defaultValue;
    const data = localStorage.getItem(key) || '';
    try {
        return JSON.parse(data);
    } catch (error) {
        return defaultValue;
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

export function
    setLocalUser(cuser: CurrentUser) {
    return setConfigValue('cuser', cuser);
}

export function getLocalUser() {
    return getConfigValue('cuser');
}

export function removeLocalUser() {
    removeConfig('cuser');
}

export function getLanguageId() {
    return getConfigValue('language');
}

export function getLocalDictionaries() {
    const localDictionaries = getConfigValue('dictionaries');
    if (!!localDictionaries) {
        return Promise.resolve(localDictionaries);
    }
    return getLanguage().then((remote) => {
        setConfigValue('dictionaries', remote.dictionaries);
        return remote.dictionaries;
    });
}

export function setRemoteDicionary(newDictionary: Dictionary): Promise<any> {
    return setLanguage(newDictionary);
}

