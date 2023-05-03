import React, { useState } from "react";

function login() {
  const [usernername, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => event.preventDefault();
  // const handleChange = (event) => {
  //   setUsername(event.target.value);
  // };
  return (
    <div className="login">
      <h1>WELCOME</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Username">Username</label>
        <input
          id="username"
          type="text"
          value={usernername}
          onChange={(event) => setUsername(event.target.value)}
        />
        <label htmlFor="Password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <span>Forget password ?</span>
        <input id="login" type="submit" value="Login" />
        <p>
          Don't have an account ? <span>Sign-up</span>
        </p>
      </form>
    </div>
  );
}

export default login;
