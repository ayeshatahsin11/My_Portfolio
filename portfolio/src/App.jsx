import { useLayoutEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";

// Handles scrolling when the route changes:
// - opening a new page  -> instantly at the top (no scrollbar animation)
// - links like "/#skills" from another page -> instantly at that section
// - links like "#skills" on the same page   -> smooth scroll
function ScrollToHash() {
  const { pathname, hash, key } = useLocation();
  const previousPath = useRef(null);

  useLayoutEffect(() => {
    const pageChanged = previousPath.current !== pathname;
    previousPath.current = pathname;

    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: pageChanged ? "instant" : "smooth" });
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash, key]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}