import React from "react";
import { createRoot } from "react-dom/client";
import "./firebase";

function App() {
    return (
        <div>Hello, esbuild!</div>
    );
}

createRoot(document.getElementById("root")).render(<App />);

// hot reload
new EventSource('/esbuild').addEventListener('change', () => location.reload())