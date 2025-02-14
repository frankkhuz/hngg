"use client";

import { useEffect, useState } from "react";
import Navbar from "./NavBar";

export default function TicketReady() {
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
        minHeight: "100vh",
        backgroundColor: "#1e293b",
        padding: "1rem",
      }}
    >
      <Navbar />
      <div style={{ maxWidth: "40rem", margin: "0 auto" }}>
        <div
          style={{
            backgroundColor: "#1e293b",
            color: "white",
            padding: "1rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginBottom: "0.5rem",
            }}
          >
            Your Ticket for Techember Fest 2025
          </h2>
          <p>Ticket Type: {ticketData.selectedTicket}</p>
          <p>Number of Tickets: {ticketData.numTickets}</p>
          <p>Name: {attendeeData.name}</p>
          <p>Email: {attendeeData.email}</p>
          {attendeeData.image && (
            <div style={{ marginTop: "1rem" }}>
              <img
                src={attendeeData.image}
                alt="Profile"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <p>Profile photo uploaded successfully</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
