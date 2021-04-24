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
