import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
const Login = () => {
  const { login, user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //
    login(formData);
  };

  return user ? (
    <>
      <h4>Greetings from Practical Products</h4>
      <p>Your Email: {user.email}</p>
      <p>Your password : {user.password}</p>
    </>
  ) : (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Login Page</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginBottom: "4px",
            marginTop: "4px",
          }}
        >
          <label htmlFor="email">Email:</label>
          <input
            onChange={handleChange}
            value={formData.email}
            style={{
              padding: "8px",
            }}
            type="email"
            placeholder="Enter Your Email..."
            name="email"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginBottom: "4px",
            marginTop: "4px",
          }}
        >
          <label htmlFor="password">Password:</label>
          <input
            value={formData.password}
            onChange={handleChange}
            style={{
              padding: "8px",
            }}
            type="password"
            placeholder="Enter Your Password..."
            name="password"
          />
        </div>

        <div>
          <button
            style={{
              marginBottom: "4px",
              marginTop: "10px",
              border: "2px solid #ccc",
              textAlign: "center",
            }}
          >
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
