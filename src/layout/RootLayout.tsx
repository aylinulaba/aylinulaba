import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";

export default function RootLayout() {
  useEffect(() => {
    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");

    if (!dot || !ring) return;

    const move = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      dot.style.left = `${clientX}px`;
      dot.style.top = `${clientY}px`;

      ring.style.left = `${clientX}px`;
      ring.style.top = `${clientY}px`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="min-h-screen bg-base-50 text-base-800">
      <Navbar />

      <main className="px-[50px] pt-[150px] pb-[50px]">
        <Outlet />
      </main>

      {/* Custom Cursor */}
      <div id="cursor-dot" />
      <div id="cursor-ring" />
    </div>
  );
}