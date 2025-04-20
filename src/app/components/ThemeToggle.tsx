"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  
  // Toggle light mode
  const toggleLightMode = () => {
    setLightMode(!lightMode);
    document.body.classList.toggle('light-mode');
    localStorage.setItem('lightMode', (!lightMode).toString());
  };
  
  // Check for saved preference and set mounted state on component mount
  useEffect(() => {
    const savedMode = localStorage.getItem('lightMode');
    if (savedMode === 'true') {
      setLightMode(true);
      document.body.classList.add('light-mode');
    }
    setMounted(true);
  }, []);

  // Only render the button on the client side
  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-[9999] bg-white dark:bg-gray-900 p-1 rounded-full shadow-lg">
      <button
        onClick={toggleLightMode}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
        aria-label={lightMode ? "ダークモードに切り替え" : "ライトモードに切り替え"}
      >
        {lightMode ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        )}
      </button>
    </div>
  );
}
