import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

 const handleLogin = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please fill all fields");
    return;
  }

  alert("Login Successful");
  navigate("/dashboard");
};

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Indian Sign Language Generator</h1>

      <h2>Login</h2>

      <input
  id="email"
  type="email"
  placeholder="Enter Email"
/>
      <br /><br />

      <input
  id="password"
  type="password"
  placeholder="Enter Password"
/>
      <br /><br />

      <button onClick={handleLogin}>Login</button>

      <br /><br />

      <Link to="/register">
        New User? Register Here
      </Link>
    </div>
  );
}

export default Login;