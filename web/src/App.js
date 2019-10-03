import React, { useState } from "react";
import Api from './services/api';
import "./App.css";

import logo from "./assets/logo.svg";

function App() {
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    
    Api.login({ email });
  }

  return (
    <div className="container">
      <img src={logo} alt="AirCnC" />
      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre{" "}
          <strong>talentos</strong> para sua empresa
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="example@example.com" />
          <button className="btn" type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
