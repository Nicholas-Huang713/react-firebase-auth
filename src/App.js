import React, {useState, useEffect} from 'react'
import './App.css';
import firebase from 'firebase';
// import firebase from 'firebase/app';
// import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

firebase.initializeApp({
  apiKey: "AIzaSyB0kSdLJV6YvLtK1OZmxb_Cm93UzMePNx0",
  authDomain: "fir-auth-8fd84.firebaseapp.com"
})

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

 
  
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  } 
  
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user)
    })
  }, [])

  return (
    <div>
      {isSignedIn? (
          <>
            <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
          </>
        ) : (
        <StyledFirebaseAuth 
          firebaseAuth={firebase.auth()}
          uiConfig={uiConfig}
        
        />
        )
      }
        
    </div>
  );
}

export default App;
