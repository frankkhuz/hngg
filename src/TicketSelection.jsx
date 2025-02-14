"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Navbar from "./NavBar";

export default function TicketSelection() {
  const router = useRouter();
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [numTickets, setNumTickets] = useState("1");

  const tickets = [
    { type: "Free", description: "Regular Access", price: 0 },
    { type: "VIP", description: "VIP Access", price: 150 },
    { type: "Premium", description: "VIP Access", price: 150 },
  ];

  const handleNext = () => {
    if (!selectedTicket) {
      alert("Please select a ticket type.");
      return;
    }

    // Save selected ticket and number of tickets to localStorage
    const ticketData = {
      selectedTicket,
      numTickets,
    };
    localStorage.setItem("ticketData", JSON.stringify(ticketData));
    router.push("/attendee");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#041E23",
        padding: "1rem",
      }}
    >
      <Navbar />
      <div style={{ maxWidth: "40rem", margin: "0 auto" }}>
        <div
          style={{
            backgroundColor: "#02191D",
            color: "white",
            padding: "1.4rem",
            borderRadius: "2rem",
            border: "1px solid #24A0B5",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <h2
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "-1rem",
              }}
            >
              <div style={{ fontSize: "12px", color: "white" }}>Step 1/3</div>
              <p style={{ fontFamily: "JejuMyeongjo", fontSize: "24px" }}>
                Ticket Selection
              </p>
            </h2>
            <div
              style={{
                width: "33%",
                backgroundColor: "#24A0B5",
                height: "0.2rem",
                marginBottom: "1rem",
                marginTop: "-1rem",
              }}
            ></div>
          </div>
          <div
            style={{
              marginTop: "3rem",
              backgroundColor: "#0E464F",
              padding: "2rem",
              // border: "2px solid red",
              borderRadius: "1rem",
            }}
          >
            <div>
              <div
                style={{
                  border: "1px solid #24A0B5",
                  borderRadius: "0.5rem",
                  padding: "1.5rem",
                  marginBottom: "1.5rem",
                  background:
                    "linear-gradient(to left, #07373F 40%, rgba(10, 12, 17, 0.1) 100%)",
                }}
              >
                <>
                  <h2 className="header">Techember Fest '25</h2>

                  <style jsx>{`
                    .header {
                      font-size: 62px;
                      text-align: center;
                      margin-bottom: 0.5rem;
                      font-family: "Road Rage", cursive;
                    }

                    @media (max-width: 768px) {
                      .header {
                        font-size: 34px;
                      }
                    }
                  `}</style>
                </>
                <div className="techember-text">
                  <p>Join us for an unforgettable experience at</p>
                  <p>our flagship event and tech fest</p>
                  <div className="event-details">March 15, 2025 7:00 PM</div>

                  <style jsx>{`
                    .techember-text {
                      text-align: center;
                      color: white;
                    }

                    p {
                      font-size: 1rem;
                      margin: 0;
                    }

                    .event-details {
                      font-size: 0.875rem;
                      margin-top: 1rem;
                    }

                    /* Smaller font sizes for mobile screens */
                    @media (max-width: 768px) {
                      p {
                        font-size: 0.65rem;
                      }

                      .event-details {
                        font-size: 0.5rem;
                      }
                    }
                  `}</style>
                </div>
              </div>
              <div
                style={{
                  width: "full",
                  backgroundColor: "#07373F",
                  height: "0.2rem",
                  marginBottom: "1rem",
                }}
              ></div>
              <div style={{ display: "grid", gap: "1rem" }}>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      color: "white",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Select Ticket Type
                  </label>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(120px, 1fr))",
                      gap: "1rem",
                    }}
                  >
                    {tickets.map((ticket) => (
                      <div
                        key={ticket.type}
                        onClick={() => setSelectedTicket(ticket.type)}
                        style={{
                          padding: "1rem",
                          borderRadius: "0.5rem",
                          border:
                            selectedTicket === ticket.type
                              ? "1px solid #24A0B5"
                              : "1px solid #374151",
                          backgroundColor:
                            selectedTicket === ticket.type
                              ? "transparent"
                              : "#052228",
                          cursor: "pointer",
                          transition: "border-color 0.2s ease-in-out",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start", // Align content to the left
                          textAlign: "left", // Ensure text aligns left
                        }}
                      >
                        <div style={{ fontWeight: "500" }}>{ticket.type}</div>
                        <div style={{ fontSize: "0.875rem", color: "white" }}>
                          {ticket.description}
                        </div>
                        <div
                          style={{ marginTop: "0.5rem", fontWeight: "bold" }}
                        >
                          {ticket.price === 0 ? "Free" : `$${ticket.price}`}
                        </div>
                      </div>
                    ))}
                  </div>

                  <style jsx>{`
                    @media (max-width: 768px) {
                      .header {
                        font-size: 1rem;
                      }
                    }

                     {
                    }
                  `}</style>
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      color: "white",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Number of Tickets
                  </label>
                  <div style={{ position: "relative" }}>
                    <select
                      value={numTickets}
                      onChange={(e) => setNumTickets(Number(e.target.value))}
                      style={{
                        width: "8rem",
                        background: "#052228",

                        border: "1px solid #24A0B5",
                        color: "white",
                        padding: "0.5rem 1rem",
                        borderRadius: "0.5rem",
                        appearance: "none",
                        outline: "none",
                        boxShadow: "0 0 0 1px transparent",
                      }}
                    >
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option
                          key={num}
                          value={num}
                          style={{ background: "#1f2937", color: "white" }}
                        >
                          {num}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "1rem",
                  }}
                  className="button-container"
                >
                  <button
                    style={{
                      padding: "0.75rem 1.5rem",
                      borderRadius: "0.5rem",
                      border: "none",
                      backgroundColor: "#374151",
                      color: "white",
                      cursor: "pointer",
                      width: "48%",
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleNext}
                    style={{
                      padding: "0.75rem 1.5rem",
                      borderRadius: "0.5rem",
                      border: "none",
                      backgroundColor: "#24A0B5",
                      color: "white",
                      cursor: "pointer",
                      width: "48%",
                    }}
                  >
                    Next
                  </button>
                </div>
                <style>
                  {`
    @media (max-width: 768px) {
      .responsive-grid {
        grid-template-columns: 1fr !important;
      }
    }
  `}
                </style>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
