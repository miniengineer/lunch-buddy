import React, { useState, useEffect } from 'react';
import * as Api from '../utils/authentication/api';

export const UserContext = React.createContext({});

const UserContextProvider = ({ children }) => {
  const [signedStatus, setSignedStatus] = useState('unknown');

  useEffect(() => {
    Api.isAuthed()
      .then((response) => {
        if (response.statusText === 'OK') {
          setSignedStatus('signed_in');
        }
      })
      .catch((e) => {
        if (!e.response) {
          alert('Network error');
        }

        if (e.response.status === 401) {
          setSignedStatus('signed_out');
          return;
        }
        // pass empty array to call the endpoint only on component mount
      });
  }, []);

  return (
    <UserContext.Provider value={{ signedStatus, setSignedStatus }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
