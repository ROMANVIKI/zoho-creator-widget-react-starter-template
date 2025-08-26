// ZohoProvider.jsx
import React, { createContext, useEffect, useState } from 'react';

export const ZohoContext = createContext();

export const ZohoProvider = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [zohoUser, setZohoUser] = useState(null);

  useEffect(() => {
    ZOHO.CREATOR.init().then((data) => {
      console.log('Zoho SDK initialized:', data);
      setIsInitialized(true);
      setZohoUser(data); // Optional: expose user/org info if needed
    });
  }, []);

  return (
    <ZohoContext.Provider value={{ isInitialized, zohoUser }}>
      {children}
    </ZohoContext.Provider>
  );
};

