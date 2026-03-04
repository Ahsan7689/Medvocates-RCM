import { useState, useEffect } from 'react';

/**
 * Custom hook for localStorage with React state
 * @param {String} key - localStorage key
 * @param {*} initialValue - Initial value if key doesn't exist
 * @returns {Array} [storedValue, setValue]
 */
export const useLocalStorage = (key, initialValue) => {
  // Get stored value from localStorage
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Update localStorage when value changes
  const setValue = (value) => {
    try {
      // Allow value to be a function like useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
};

// Usage example:
// const [name, setName] = useLocalStorage('user-name', '');