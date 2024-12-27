import { useState, useEffect, useRef } from "react";

export default function Dropdown({ buttonContent, children, position }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button className="flex items-center" onClick={() => setIsOpen(true)}>{buttonContent}</button>
      {isOpen && (
        <div
          className={`absolute ${
            position === "left" ? "left-0" : "right-0"
          } mt-2 bg-primary p-2 rounded-xl shadow-lg z-10`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
