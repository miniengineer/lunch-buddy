import React, { useContext, useReducer } from 'react';
import * as Api from '../utils/authentication/api';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { Redirect } from 'react-router-dom';
import Container from './Container';

const Signup = () => {
  const { isSignedIn, setSignedIn } = useContext(UserContext);
  const [signupFormInputs, setSignupFormInputs] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      email: '',
      password: '',
      passwordConfirmation: '',
    }
  );

  const handleSignup = async (e) => {
    e.preventDefault();
    const { email, password, passwordConfirmation } = signupFormInputs;
    // TODO
    // use sweetalert
    if (!email) {
      alert('Please enter an email');
      return;
    }
    if (!password) {
      alert('Please enter a valid password');
      return;
    }
    if (password.length < 6) {
      alert('Password must include at least 6 letters');
      return;
    }
    if (!passwordConfirmation || passwordConfirmation !== password) {
      alert('Password and password confirmation does not match');
      return;
    }

    const response = await Api.signup(email, password, passwordConfirmation);
    if (response.statusText === 'Created') {
      setSignedIn(true);
    } else {
      // TODO
      // better error handling
      alert('Some error happened on the server');
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setSignupFormInputs({ [name]: value });
  };

  return (
    <Container>
      <h1>Create an account</h1>
      <form>
        <div className="form-group">
          <label htmlFor="email"></label>
          <input
            type="email"
            name="email"
            className="form-control"
            aria-describedby="email"
            placeholder="harry.potter@hogwarts.edu"
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password"></label>
          <input
            type="password"
            name="password"
            className="form-control"
            aria-describedby="password"
            placeholder="griffindoristhebest7"
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="passwordConfirmation"></label>
          <input
            type="password"
            name="passwordConfirmation"
            className="form-control"
            aria-describedby="passwordConfirmation"
            placeholder="griffindoristhebest7"
            onChange={handleOnChange}
          />
        </div>
        <button className="btn btn-primary mt-3" type="submit" onClick={handleSignup}>
          Sign me up
        </button>
      </form>
      <p>
        Already have an account? Then <Link to="/sign_in">sign in</Link>
      </p>
      {isSignedIn ? <Redirect to="/profile" /> : null}
    </Container>
  );
};

export default Signup;
