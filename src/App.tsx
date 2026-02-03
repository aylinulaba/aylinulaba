import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import BlogPage from "./pages/BlogPage";
import WorkDetailPage from "./pages/works/WorkDetailPage";
import BlogDetailPage from "./pages/posts/BlogDetailPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />

          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:slug" element={<WorkDetailPage />} />

          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}