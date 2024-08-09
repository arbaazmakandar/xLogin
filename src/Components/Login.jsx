import React, { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({ loggedIn: false, message: "" });
  const handleSubmit = (event) => {
    event.preventDefault();
    const [usernameInput, passwordInput] = event.target.elements;
    if (usernameInput.value === "user" && passwordInput.value === "password") {
      setForm({ loggedIn: true, message: "Welcome, user" });
    } else {
      setForm({ loggedIn: false, message: "Incorrect username or password" });
    }
  };
  return (
    <>
      <h2>Login Page</h2>
      {form.loggedIn ? (
        <p>{form.message}</p>
      ) : (
        <>
          {form.message}
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input type="text" placeholder="username" id="username" required />
            <br />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="password"
              id="password"
              required
            />
            <br />
            <button>Submit</button>
          </form>
        </>
      )}
    </>
  );
};

export default Login;
