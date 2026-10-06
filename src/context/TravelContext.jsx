import { createContext, useContext, useMemo, useState } from 'react';
import { itineraryData, navItems, tripData } from '../services/travelData';

const TravelContext = createContext(null);

export function TravelProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const value = useMemo(
    () => ({
      trips: tripData,
      itinerary: itineraryData,
      navItems,
      isSidebarOpen,
      setIsSidebarOpen,
    }),
    [isSidebarOpen]
  );

  return <TravelContext.Provider value={value}>{children}</TravelContext.Provider>;
}

export function useTravel() {
  const context = useContext(TravelContext);

  if (!context) {
    throw new Error('useTravel must be used within a TravelProvider.');
  }

  return context;
}
