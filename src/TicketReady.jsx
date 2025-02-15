"use client";

import { default as React, useEffect, useState } from "react";
import Navbar from "./NavBar";

const TicketReady = () => {
  const [ticketData, setTicketData] = useState(null);
  const [attendeeData, setAttendeeData] = useState(null);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });
  const isMobile = windowSize.width < 768;
  const isTablet = windowSize.width >= 768 && windowSize.width < 1024;

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const savedTicket = localStorage.getItem("ticketData");
    const savedAttendee = localStorage.getItem("attendeeData");

    if (savedTicket && savedAttendee) {
      setTicketData(JSON.parse(savedTicket));
      setAttendeeData(JSON.parse(savedAttendee));
    }
  }, []);

  if (!ticketData || !attendeeData) return <div>Loading...</div>;

  return (
    <div
      style={{
        width: "100vw",
        height: "110vh",
        backgroundColor: "#12464E",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
        overflow: "hidden", // Prevents unwanted scrolling
      }}
    >
      {/* ✅ Centered Image (Maintains Height) */}
      <img
        src="https://i.ibb.co/xrPBgZs/Subtract.png"
        alt="Event Banner"
        style={{
          width: "70%",
          maxWidth: "400px",
          maxHeight: "90%",
        }}
      />

      <div
        className="top"
        style={{
          position: "absolute",
          top: isMobile ? "15%" : "10%",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "1px",
        }}
      >
        <h3
          className="h3"
          style={{
            fontSize: isMobile ? "1rem" : "1.5rem",
            fontWeight: "bold",
            color: "white",
            fontStyle: "italic",
          }}
        >
          Techember Fest '25
        </h3>
        <p
          style={{
            color: "#ccc",
            fontSize: isMobile ? "10px" : "12px",
            marginTop: "-1.3rem",
          }}
        >
          📍 64 Rumens Road, Ikoyi, Lagos
        </p>
        <p
          style={{
            color: "#ccc",
            fontSize: isMobile ? "9px" : "12px",
            marginTop: "-0.8rem",
          }}
        >
          📅 March 15, 2025 | 8:00 PM
        </p>
      </div>
      {/* ✅ Circle at the Top */}
      <div
        style={{
          width: isMobile ? "100px" : "150px",
          height: isMobile ? "100px" : "150px",

          borderRadius: "1rem",
          border: "3px solid #24A0B5",
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: "translateX(-50%)", // Centers it horizontally
        }}
      >
        <img
          src={attendeeData.image || "https://via.placeholder.com/80"}
          alt="Profile"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "1rem",
          }}
        />
      </div>

      {/* ✅ Box in the Middle (Absolute to Prevent Shifting) */}
      <div
        style={{
          backgroundColor: "#12464E",
          borderRadius: "10px",
          padding: "0 0.5rem",
          backgroundColor: "#12464E",
          position: "absolute",
          top: "60%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "2",
          width: "80%",
          maxWidth: "300px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)", // 2 columns
            gridTemplateRows: "auto auto auto", // Flexible rows
            border: "1px solid red",
            width: isMobile ? "70%" : "auto",
          }}
        >
          {/* Name */}
          <div
            style={{
              gridColumn: "span 1",
              border: "0 1px 1px 0  solid #FFFFFF",

              textAlign: "center",
              color: "white",
            }}
          >
            <p
              style={{
                fontSize: isMobile ? "10px" : "auto",
                color: "#FFFFFF",
              }}
            >
              Enter your name
            </p>
            <p style={{ marginTop: "5px", fontWeight: "bold" }}>
              {attendeeData.name}
            </p>
          </div>

          {/* Email */}
          <div
            style={{
              gridColumn: "span 1",
              border: "1px solid #FFFFFF",
              borderTop: 0,
              textAlign: "center",
              color: "white",
              borderRight: 0,
            }}
          >
            <p
              style={{
                color: "#FFFFFF",
              }}
            >
              Enter your email *
            </p>
            <p style={{ marginTop: "5px", fontWeight: "bold" }}>
              {attendeeData.email}
            </p>
          </div>

          {/* Ticket Type */}
          <div
            style={{
              gridColumn: "span 1",
              border: "1px solid #FFFFFF",
              borderLeft: 0,

              textAlign: "center",
              color: "white",
            }}
          >
            <p
              style={{
                color: "#FFFFFF",
              }}
            >
              Ticket Type :
            </p>
            <p style={{ marginTop: "5px", fontWeight: "bold" }}>
              {ticketData.selectedTicket}
            </p>
          </div>

          {/* Ticket For */}
          <div
            style={{
              gridColumn: "span 1",
              border: "1px solid #FFFFFF",
              borderRight: 0,

              textAlign: "center",
              color: "white",
            }}
          >
            <p
              style={{
                color: "#FFFFFF",
              }}
            >
              Ticket for :
            </p>
            <p style={{ marginTop: "5px", fontWeight: "bold" }}>
              {ticketData.numTickets}
            </p>
          </div>

          {/* Special Request (Spans Full Width) */}
          <div
            style={{
              gridColumn: "span 2",
              border: "1px solid #FFFFFF",
              borderRight: 0,
              borderLeft: 0,
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              color: "white",
            }}
          >
            <p
              style={{
                color: "#FFFFFF",
              }}
            >
              Special Request
            </p>
            <p style={{ marginTop: "5px", fontWeight: "bold" }}>N/A</p>
          </div>
        </div>
      </div>

      {/* ✅ Paragraph at the Bottom */}
      <img
        src="https://i.ibb.co/xqKNFc4M/Bar-Code.png"
        alt="Barcode"
        style={{
          width: "80%", // Adjust size as needed
          maxWidth: "250px", // Prevents it from getting too large
          position: "absolute",
          bottom: "10%", // Keeps it near the bottom
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
    </div>
  );
};

export default TicketReady;
