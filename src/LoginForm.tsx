import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
//import { initializeApp } from "firebase/app";
//import { getAuth } from "firebase/auth";
//import firebaseConfig from "../firebaseConfig";
//import './LoginForm.css';

import {auth} from "../firebaseConfig";



function LoginForm() {
//  const app = initializeApp(firebaseConfig); //alustetaan sovellus
 // const auth = getAuth(app); //autentikoinnin luontisysteemi
    
  const [email, setEmail] = useState<string>(""); 
  const [password, setPassword] = useState<string>("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Tämä on esimerkkiviesti " + user.email);

      });
      // Kirjautuminen onnistui
    } catch (error) {

      console.log("Kirjautuminen epäonnistui")
      // Kirjautuminen epäonnistui, näytä virheilmoitus käyttäjälle
    }
  }

  return (
    <div>
      <h2>Kirjaudu sisään</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Sähköposti:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            width="50%"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Salasana:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Kirjaudu sisään</button>
      </form>
    </div>
  );
}

export default LoginForm;