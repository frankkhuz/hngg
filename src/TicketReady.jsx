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
    <div style={{ backgroundColor: "#12464E" }}>
      <Navbar />
      <div style={{}}>
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
              top: isMobile ? "17%" : "10%",
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
              top: isMobile ? "27%" : "25%",
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
              padding: isMobile ? "0.2rem" : "0.5rem",
              position: "absolute",
              top: isMobile ? "55%" : "60%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: "2",
              width: isMobile ? "60%" : "50%",
              maxWidth: isMobile ? "250px" : "300px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                gridTemplateRows: "auto",
                border: "1px solid #24A0B5",
              }}
            >
              {/* Name */}
              <div
                style={{
                  gridColumn: "span 1",
                  textAlign: "center",
                  color: "white",
                  padding: isMobile ? "2px" : "6px",
                }}
              >
                <p
                  style={{
                    fontSize: isMobile ? "9px" : "14px",
                    color: "#FFFFFF",
                  }}
                >
                  Enter your name
                </p>
                <p
                  style={{
                    marginTop: "3px",
                    fontWeight: "bold",
                    fontSize: isMobile ? "11px" : "16px",
                  }}
                >
                  {attendeeData.name}
                </p>
              </div>

              {/* Email */}
              <div
                style={{
                  gridColumn: "span 1",
                  border: "1px  solid #24A0B5",
                  textAlign: "center",
                  color: "white",
                  padding: isMobile ? "2px" : "6px",
                }}
              >
                <p
                  style={{
                    fontSize: isMobile ? "9px" : "14px",
                    color: "#FFFFFF",
                  }}
                >
                  Enter your email *
                </p>
                <p
                  style={{
                    marginTop: "3px",
                    fontWeight: "bold",
                    fontSize: isMobile ? "11px" : "16px",
                  }}
                >
                  {attendeeData.email}
                </p>
              </div>

              {/* Ticket Type */}
              <div
                style={{
                  gridColumn: "span 1",
                  border: "1px solid #24A0B5",
                  textAlign: "center",
                  color: "white",
                  padding: isMobile ? "2px" : "6px",
                }}
              >
                <p
                  style={{
                    fontSize: isMobile ? "9px" : "14px",
                    color: "#FFFFFF",
                  }}
                >
                  Ticket Type :
                </p>
                <p
                  style={{
                    marginTop: "3px",
                    fontWeight: "bold",
                    fontSize: isMobile ? "11px" : "16px",
                  }}
                >
                  {ticketData.selectedTicket}
                </p>
              </div>

              {/* Ticket For */}
              <div
                style={{
                  gridColumn: "span 1",
                  border: "1px solid #24A0B5",
                  textAlign: "center",
                  color: "white",
                  padding: isMobile ? "2px" : "6px",
                }}
              >
                <p
                  style={{
                    fontSize: isMobile ? "9px" : "14px",
                    color: "#FFFFFF",
                  }}
                >
                  Ticket for :
                </p>
                <p
                  style={{
                    marginTop: "3px",
                    fontWeight: "bold",
                    fontSize: isMobile ? "11px" : "16px",
                  }}
                >
                  {ticketData.numTickets}
                </p>
              </div>

              {/* Special Request */}
              <div
                style={{
                  gridColumn: "span 2",
                  border: "1px solid #24A0B5",
                  textAlign: "center",
                  color: "white",
                  padding: isMobile ? "2px" : "6px",
                }}
              >
                <p
                  style={{
                    fontSize: isMobile ? "9px" : "14px",
                    color: "#FFFFFF",
                  }}
                >
                  Special Request
                </p>
                <p
                  style={{
                    marginTop: "3px",
                    fontWeight: "bold",
                    fontSize: isMobile ? "11px" : "16px",
                  }}
                >
                  N/A
                </p>
              </div>
            </div>
          </div>

          {/* ✅ Paragraph at the Bottom */}
          <img
            src="https://i.ibb.co/xqKNFc4M/Bar-Code.png"
            alt="Barcode"
            style={{
              width: "80%", // Adjust size as needed
              maxWidth: isMobile ? "200px" : "250px", // Prevents it from getting too large
              position: "absolute",
              bottom: isMobile ? "19%" : "10%", // Keeps it near the bottom
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TicketReady;
