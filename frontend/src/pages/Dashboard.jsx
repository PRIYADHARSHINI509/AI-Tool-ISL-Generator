import { Link } from "react-router-dom";
function Dashboard() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
  <h1>Indian Sign Language Generator</h1>

  <h2>Dashboard</h2>

  <Link to="/text-to-isl">
  <button>📝 Text to ISL</button>
</Link>

<br /><br />

<Link to="/audio-to-isl">
  <button>🎤 Audio to ISL</button>
</Link>

<br /><br />

<Link to="/video-to-isl">
  <button>🎥 Video to ISL</button>
</Link>

<br /><br />

<Link to="/history">
  <button>📜 Translation History</button>
</Link>
</div>
  );
}

export default Dashboard;