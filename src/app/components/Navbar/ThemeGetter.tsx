'use client'
import { useEffect } from 'react';

const ThemeGetter = () => {
  useEffect(() => {
    const isDark = localStorage.getItem('isdark');
    const htmlElement = document.querySelector('html');

    if (htmlElement) {
      htmlElement.setAttribute('data-theme', isDark || 'light');
    }
  }, []); // The empty dependency array ensures that this effect runs once after the component mounts.

  // Your component JSX here
  return (
    <div>
      {/* Your component content */}
    </div>
  );
};

export default ThemeGetter;