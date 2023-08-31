import { useEffect, useState } from 'react';

export function useDarkMode() {
  const [theme, setTheme] = useState('light');
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [colorTheme, theme]);

  return [setTheme, colorTheme];
}

export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
