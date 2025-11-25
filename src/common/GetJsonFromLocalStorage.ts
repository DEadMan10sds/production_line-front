export default function GetJsonFromLocalStorage<T>(
  localStorageKey: string
): T | null {
  if (!localStorageKey) throw new Error("Must pass an local storage key");

  const localStorageData = localStorage.getItem(localStorageKey);

  return localStorageData ? JSON.parse(localStorageData) : null;
}
