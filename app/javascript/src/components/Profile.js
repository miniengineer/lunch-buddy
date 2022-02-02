import React, { useContext } from 'react';
import Container from './Container';
import Signout from './Signout';
import { UserContext } from '../context/UserContext';

const Profile = () => {
  const { email } = useContext(UserContext);

  return (
    <Container>
      <h1>You have successfully signed in!</h1>
      <p>This is a private page.</p>
      <Signout email={email} />
    </Container>
  );
};

export default Profile;
