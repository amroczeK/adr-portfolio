// import React from 'react';
// import firebase from 'firebase/app';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth } from '../../firebase';

// const Login = () => {
//   // Signed in - user is an object, Signed out - user is null
//   const [user] = useAuthState(auth);

//   const SignIn = () => {
//     const signInWithGoogle = () => {
//       const provider = new firebase.auth.GoogleAuthProvider();
//       auth.signInWithPopup(provider);
//     };
//     return <button onClick={signInWithGoogle}>Sign in with Google</button>;
//   };

//   const SignOut = () => {
//     return auth.currentUser && <button onClick={() => auth.signOut()}>Sign Out</button>;
//   };
//   return <div></div>;
// };

// export default Login;

import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import { auth } from '../../firebase';
import { AuthContext } from '../../contexts/AuthContext';

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await auth.signInWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    console.log(currentUser);
    return <Redirect to='/' />;
  }

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name='email' type='email' placeholder='Email' />
        </label>
        <label>
          Password
          <input name='password' type='password' placeholder='Password' />
        </label>
        <button type='submit'>Log in</button>
      </form>
    </div>
  );
};

export default withRouter(Login);
