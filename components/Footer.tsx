import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer footer-center bg-white text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Shopy
          </p>
        </aside>
      </footer>
    </>
  );
}
