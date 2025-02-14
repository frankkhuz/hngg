"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./NavBar";

const Ticket = () => {
  const [ticketData, setTicketData] = useState(null);
  const [attendeeData, setAttendeeData] = useState(null);

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
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #0b132b, black)",
        color: "white",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "#1a1a2e",
          padding: "20px",
          textAlign: "center",
          border: "2px solid #00d4ff",
          boxShadow: "0px 0px 15px rgba(0, 255, 255, 0.5)",
          position: "relative",
        }}
      >
        {/* Inside Cut-Out Effect */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "10px", // Width for an oval shape
              height: "10px", // Height remains smaller
              backgroundColor: "#0b132b",
              borderRadius: "50%", // Ensures an oval shape when width ≠ height
              top: "-20px",
              left: "-20px",
              borderRight: "2px solid #00d4ff", // Border on the left
              transform: "skewX(-20deg)", // Leaning effect towards the right
            }}
          ></div>

          <div
            style={{
              position: "absolute",
              width: "40px",
              height: "40px",
              backgroundColor: "#0b132b",
              borderRadius: "50%",
              top: "-20px",
              right: "-20px",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              width: "40px",
              height: "40px",
              backgroundColor: "#0b132b",
              borderRadius: "50%",
              bottom: "-20px",
              left: "-20px",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              width: "40px",
              height: "40px",
              backgroundColor: "#0b132b",
              borderRadius: "50%",
              bottom: "-20px",
              right: "-20px",
            }}
          ></div>
        </div>

        <h2 style={{ fontSize: "22px", fontWeight: "bold", color: "#00d4ff" }}>
          Your Ticket is Booked!
        </h2>
        <p style={{ marginTop: "10px", color: "#ccc" }}>
          Check your email for a copy or download below
        </p>

        {/* Ticket Card */}
        <div
          style={{
            marginTop: "20px",
            backgroundColor: "#12232e",
            padding: "15px",
            border: "1px solid #00d4ff",
            borderRadius: "10px",
            position: "relative",
          }}
        >
          <h3 style={{ fontSize: "18px", fontWeight: "bold", color: "white" }}>
            Techember Fest '25
          </h3>
          <p style={{ color: "#ccc", fontSize: "12px" }}>
            📍 64 Rumens Road, Ikoyi, Lagos
          </p>
          <p style={{ color: "#ccc", fontSize: "12px" }}>
            📅 March 15, 2025 | 8:00 PM
          </p>

          <div
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={attendeeData.image || "https://via.placeholder.com/80"}
              alt="Profile"
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                border: "2px solid #00d4ff",
              }}
            />
          </div>

          <div
            style={{
              marginTop: "15px",
              textAlign: "left",
              color: "#ccc",
              fontSize: "12px",
              lineHeight: "1.5",
            }}
          >
            <p>
              <strong style={{ color: "white" }}>Name:</strong>{" "}
              {attendeeData.name}
            </p>
            <p>
              <strong style={{ color: "white" }}>Email:</strong>{" "}
              {attendeeData.email}
            </p>
            <p>
              <strong style={{ color: "white" }}>Ticket Type:</strong>{" "}
              {ticketData.selectedTicket}
            </p>
            <p>
              <strong style={{ color: "white" }}>Ticket For:</strong>{" "}
              {ticketData.numTickets}
            </p>
            <p>
              <strong style={{ color: "white" }}>Special Request:</strong> N/A
            </p>
          </div>

          {/* Barcode */}
          <div
            style={{
              marginTop: "15px",
              backgroundColor: "white",
              padding: "8px",
              borderRadius: "5px",
              textAlign: "center",
              color: "black",
              fontFamily: "monospace",
              fontSize: "16px",
            }}
          >
            234567 890236
          </div>

          {/* Download Button */}
          <button
            style={{
              marginTop: "15px",
              width: "100%",
              backgroundColor: "#00d4ff",
              color: "white",
              fontWeight: "bold",
              padding: "10px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              transition: "background 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#0094cc")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#00d4ff")
            }
          >
            Download Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
