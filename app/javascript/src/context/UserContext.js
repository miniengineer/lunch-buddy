import React, { useState, useEffect } from 'react';
import * as Api from '../utils/authentication/api';

export const UserContext = React.createContext({});

const UserContextProvider = ({ children }) => {
  const [signedInStatus, setSignedInStatus] = useState('unknown');
  const [email, setEmail] = useState('');

  useEffect(() => {
    Api.isAuthed()
      .then((response) => {
        if (response.status === 200) {
          setSignedInStatus('signed_in');
        }
      })
      .catch((e) => {
        if (!e.response) {
          alert('Network error');
        }

        if (e.response.status === 401) {
          setSignedInStatus('signed_out');
          setEmail('');
          return;
        }
        // pass empty array to call the endpoint only on component mount
      });
  }, []);

  return (
    <UserContext.Provider value={{ signedInStatus, setSignedInStatus, email, setEmail }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
