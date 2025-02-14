"use client";
import React from "react";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "1.5rem",
        color: "white",
        maxWidth: "72rem",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "1.5rem",
        border: "1px solid #24A0B5",
        borderRadius: "0.5rem",
      }}
    >
      {/* Placeholder for Logo */}
      <div style={{ width: "10%" }}>{/* <Image src={} alt="Logo" /> */}</div>

      {/* Centered Navigation Links - Hidden on Mobile */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5rem",
          fontSize: "0.875rem",
          flexGrow: 1,

          /* Hide on screens smaller than 768px */
          display: "none",
        }}
        className="nav-links"
      >
        <span
          style={{ cursor: "pointer", transition: "color 0.2s ease-in-out" }}
        >
          Events
        </span>
        <span
          style={{ cursor: "pointer", transition: "color 0.2s ease-in-out" }}
        >
          My Tickets
        </span>
        <span
          style={{ cursor: "pointer", transition: "color 0.2s ease-in-out" }}
        >
          About Project
        </span>
      </div>

      {/* My Tickets Button - Always Visible */}
      <button
        style={{
          fontSize: "0.75rem",
          background: "white",
          color: "#374151",
          border: "1px solid white",
          padding: "0.5rem 1rem",
          borderRadius: "0.375rem",
          cursor: "pointer",
          transition: "background-color 0.2s ease-in-out",
        }}
      >
        MY TICKETS
      </button>

      {/* External CSS for Hiding Nav Links on Mobile */}
      <style jsx>{`
        @media (min-width: 768px) {
          .nav-links {
            display: flex !important;
          }
        }

         {
          /* @media (max-width: 600px) {
          button {
            width: 4rem !important;
            background: red !important;
            margin-left: -2rem;
            font-size: 10px;
          }
        } */
        }
      `}</style>
    </nav>
  );
}
