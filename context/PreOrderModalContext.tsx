// context/PreOrderModalContext.tsx
'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface PreOrderModalContextType {
  isPreOrderModalOpen: boolean;
  openPreOrderModal: () => void;
  closePreOrderModal: () => void;
}

const PreOrderModalContext = createContext<PreOrderModalContextType | undefined>(undefined);

export function PreOrderModalProvider({ children }: { children: ReactNode }) {
  const [isPreOrderModalOpen, setIsPreOrderModalOpen] = useState(false);

  const openPreOrderModal = () => setIsPreOrderModalOpen(true);
  const closePreOrderModal = () => setIsPreOrderModalOpen(false);

  return (
    <PreOrderModalContext.Provider value={{ isPreOrderModalOpen, openPreOrderModal, closePreOrderModal }}>
      {children}
    </PreOrderModalContext.Provider>
  );
}

export function usePreOrderModal() {
  const context = useContext(PreOrderModalContext);
  if (context === undefined) {
    throw new Error('usePreOrderModal must be used within a PreOrderModalProvider');
  }
  return context;
}