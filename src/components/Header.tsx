"use client";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [scrolled, setScroll] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setScroll(window.pageYOffset > 50)
      );
    }
  }, []);

  useEffect(() => {
    const update = () => {
      if (headerRef.current) {
        setHeight(headerRef.current.getBoundingClientRect().height);
      }
    };

    update();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", update);
    }

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined" && headerRef.current) {
      ro = new ResizeObserver(update);
      ro.observe(headerRef.current);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", update);
      }
      if (ro) ro.disconnect();
    };
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 w-full transition-colors duration-200 ${
          scrolled ? "bg-acc" : "bg-bg"
        }`}
      >
        <div className="p-8 flex justify-center">
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold">GNCE Mercury</p>
            <p className="text-xl">FTC 26413</p>
          </div>
        </div>
      </header>
      <div aria-hidden="true" style={{ height }} />
    </>
  );
};

export default Header;
