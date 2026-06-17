import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import TextToISL from "./pages/TextToISL";
import AudioToISL from "./pages/AudioToISL";
import VideoToISL from "./pages/VideoToISL";
import History from "./pages/History";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/text-to-isl" element={<TextToISL />} />
        <Route path="/audio-to-isl" element={<AudioToISL />} />
        <Route path="/video-to-isl" element={<VideoToISL />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;