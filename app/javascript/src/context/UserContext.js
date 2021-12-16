import React, { useState, useEffect } from 'react';
import * as Api from '../utils/authentication/api';

export const UserContext = React.createContext({});

const UserContextProvider = ({ children }) => {
  const [isSignedIn, setSignedIn] = useState('unknown');

  useEffect(() => {
    Api.isAuthed()
      .then((response) => {
        if (response.statusText === 'OK') {
          setSignedIn('true');
        }
      })
      .catch((e) => {
        if (!e.response) {
          alert('Network error');
        }

        if (e.response.status === 401) {
          setSignedIn('false');
          return;
        }
        // pass empty array to call the endpoint only on component mount
      });
  }, []);

  return (
    <UserContext.Provider value={{ isSignedIn, setSignedIn }}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
