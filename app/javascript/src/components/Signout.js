import React, { useContext } from 'react';
import * as Api from '../utils/authentication/api';
import { UserContext } from '../context/UserContext';

const Signout = ({ email }) => {
  const { setSignedStatus, setEmail } = useContext(UserContext);

  const handleSignout = async (e) => {
    e.preventDefault();

    let response;
    try {
      response = await Api.signout(email);
    } catch (e) {
      if (!e.response) {
        alert('Network error');
      }

      if (e.response.status === 401) {
        alert('Network error');
        return;
      }
    }

    if (response.status === 204) {
      setSignedStatus('signed_out');
      setEmail('');
    }
  };

  return (
    <button className="btn btn-primary" onClick={handleSignout}>
      Sign out
    </button>
  );
};

export default Signout;
