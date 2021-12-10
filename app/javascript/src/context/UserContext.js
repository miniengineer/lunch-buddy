import React, { useState } from 'react';

export const UserContext = React.createContext({});

const UserContextProvider = ({ children }) => {
  const [isSignedIn, setSignedIn] = useState(false);
  return (
    <UserContext.Provider value={{ isSignedIn, setSignedIn }}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
