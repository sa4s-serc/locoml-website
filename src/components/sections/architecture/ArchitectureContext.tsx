import React, { createContext, useContext, useState } from 'react';

type ArchitectureContextType = {
  activeSyncId: string | null;
  setActiveSyncId: (id: string | null) => void;
};

const ArchitectureContext = createContext<ArchitectureContextType | undefined>(undefined);

export function ArchitectureProvider({ children }: { children: React.ReactNode }) {
  const [activeSyncId, setActiveSyncId] = useState<string | null>(null);

  return (
    <ArchitectureContext.Provider value={{ activeSyncId, setActiveSyncId }}>
      {children}
    </ArchitectureContext.Provider>
  );
}

export function useArchitecture() {
  const context = useContext(ArchitectureContext);
  if (context === undefined) {
    throw new Error('useArchitecture must be used within an ArchitectureProvider');
  }
  return context;
}
