import React, { createContext, useContext, useState, useEffect } from 'react';

interface DiscreetContextType {
  isDiscreetMode: boolean;
  toggleDiscreetMode: () => void;
  enableDiscreetMode: () => void;
  disableDiscreetMode: () => void;
}

const DiscreetContext = createContext<DiscreetContextType | undefined>(undefined);

export const DiscreetProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDiscreetMode, setIsDiscreetMode] = useState<boolean>(false);

  const toggleDiscreetMode = () => {
    setIsDiscreetMode((prev) => !prev);
  };

  const enableDiscreetMode = () => {
    setIsDiscreetMode(true);
  };

  const disableDiscreetMode = () => {
    setIsDiscreetMode(false);
  };

  // Keyboard shortcut: Press Escape key to toggle discreet disguise immediately
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsDiscreetMode((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <DiscreetContext.Provider
      value={{
        isDiscreetMode,
        toggleDiscreetMode,
        enableDiscreetMode,
        disableDiscreetMode,
      }}
    >
      {children}
    </DiscreetContext.Provider>
  );
};

export const useDiscreet = (): DiscreetContextType => {
  const context = useContext(DiscreetContext);
  if (!context) {
    throw new Error('useDiscreet must be used within a DiscreetProvider');
  }
  return context;
};
