// // src/components/ScrollToTop.tsx
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// export default function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0); // jump to top whenever path changes
//   }, [pathname]);

//   return null;
// }

// src/components/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to top on route change.
 * Uses smooth behavior unless user prefers reduced motion.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    try {
      const prefersReducedMotion = window.matchMedia
        ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
        : false;

      if (prefersReducedMotion) {
        window.scrollTo(0, 0);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch (e) {
      // Fallback to instant scroll if any error occurs
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
