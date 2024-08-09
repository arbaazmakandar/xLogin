import React, { useState } from "react";

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({ username: "", password: "" });
  const handleSubmit = (event, formData) => {
    event.preventDefault();
    const username = formData.username;
    const password = formData.password;
    console.log(username, password);
    if (username === "user" && password === "password") {
      setLoggedIn(true);
      setMessage("Welcome, user");
    } else {
      setLoggedIn(false);
      setMessage("Invalid username or password");
    }
  };
  return (
    <>
      <h2>Login Page</h2>
      {loggedIn ? (
        <p>{message}</p>
      ) : (
        <>
          {" "}
          {message}
          <form action="" onSubmit={(event) => handleSubmit(event, formData)}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              placeholder="username"
              id="username"
              required
              value={formData.username}
              onChange={(event) =>
                setFormData({ ...formData, username: event.target.value })
              }
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="password"
              id="password"
              required
              value={formData.password}
              onChange={(event) =>
                setFormData({ ...formData, password: event.target.value })
              }
            />
            <br />
            <button>Submit</button>
          </form>{" "}
        </>
      )}
    </>
  );
};

export default Login;
