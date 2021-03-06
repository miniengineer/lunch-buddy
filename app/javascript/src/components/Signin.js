import React, { useContext, useReducer } from 'react';
import * as Api from '../utils/authentication/api';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { Redirect } from 'react-router-dom';
import Container from './Container';

const Signin = () => {
  const { signedInStatus, setSignedInStatus, setEmail } = useContext(UserContext);
  const [signinFormInputs, setSigninFormInputs] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      email: '',
      password: '',
    }
  );

  const handleSignin = async (e) => {
    e.preventDefault();
    const { email, password } = signinFormInputs;

    // TODO
    // reuse form input validations?
    if (!email) {
      alert('Please enter an email');
      return;
    }
    if (!password || password.length < 6) {
      alert('Please enter a valid password');
      return;
    }

    let response;
    try {
      response = await Api.signin(email, password);
    } catch (e) {
      if (!e.response) {
        alert('Network error');
      }

      if (e.response.status === 401) {
        alert('Wrong password or user');
        return;
      }
    }

    // TODO
    // a better/more discreet way to check whether response is successfull?
    if (response.status === 201) {
      setSignedInStatus('signed_in');
      setEmail(response.data.email);
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setSigninFormInputs({ [name]: value });
  };

  return (
    <Container>
      <h1>Take me back to LunchBuddy</h1>
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
        <button type="submit" className="btn btn-primary mt-3" onClick={handleSignin}>
          Sign me in
        </button>
      </form>
      <p>
        New to LunchBuddy? Then <Link to="/sign_up">sign up</Link>
      </p>
      {signedInStatus === 'signed_in' ? <Redirect to="/profile" /> : null}
    </Container>
  );
};

export default Signin;
