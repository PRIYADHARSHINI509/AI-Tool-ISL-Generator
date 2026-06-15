import { Link } from "react-router-dom";
function Register() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Indian Sign Language Generator</h1>

      <h2>Register</h2>

      <input
        type="text"
        placeholder="Enter Full Name"
      />

      <br /><br />

      <input
        type="email"
        placeholder="Enter Email"
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
      />

      <br /><br />

      <input
        type="password"
        placeholder="Confirm Password"
      />

      <br /><br />

      <button>Register</button>
      <br /><br />

<Link to="/">
  Already have an account? Login
</Link>
    </div>
  );
}

export default Register;