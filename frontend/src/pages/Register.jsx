import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleRegister = () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (!name || !email || !password || !confirmPassword) {
    alert("Please fill all fields");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  alert("Registration Successful");
  navigate("/dashboard");
};

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Indian Sign Language Generator</h1>

      <h2>Register</h2>

      <input
  id="name"
  type="text"
  placeholder="Enter Full Name"
/>
      <br /><br />

      <input
  id="regEmail"
  type="email"
  placeholder="Enter Email"
/>
      <br /><br />

      <input
  id="regPassword"
  type="password"
  placeholder="Enter Password"
/>
      <br /><br />

      <input
  id="confirmPassword"
  type="password"
  placeholder="Confirm Password"
/>
      <br /><br />

      <button onClick={handleRegister}>Register</button>

      <br /><br />

      <Link to="/">
        Already have an account? Login
      </Link>
    </div>
  );
}

export default Register;