// "use client";
// import React, { useEffect, useState } from "react";
// import Navbar from "./NavBar";

// const Ticket = () => {
//   const [ticketData, setTicketData] = useState(null);
//   const [attendeeData, setAttendeeData] = useState(null);

//   useEffect(() => {
//     const savedTicket = localStorage.getItem("ticketData");
//     const savedAttendee = localStorage.getItem("attendeeData");

//     if (savedTicket && savedAttendee) {
//       setTicketData(JSON.parse(savedTicket));
//       setAttendeeData(JSON.parse(savedAttendee));
//     }
//   }, []);

//   if (!ticketData || !attendeeData) return <div>Loading...</div>;

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         minHeight: "100vh",
//         background: "linear-gradient(to bottom, #0b132b, black)",
//         color: "white",
//         padding: "20px",
//       }}
//     >
//       <Navbar />
//       <div
//         style={{
//           width: "100%",
//           maxWidth: "400px",
//           backgroundColor: "#1a1a2e",
//           backgroundImage: "url('https://i.ibb.co/xrPBgZs/Subtract.png')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           padding: "20px",
//           textAlign: "center",
//           position: "relative",
//         }}
//       >
//         <h2 style={{ fontSize: "22px", fontWeight: "bold", color: "#FFFFFF" }}>
//           Your Ticket is Booked!
//         </h2>
//         <p style={{ marginTop: "10px", color: "#ccc" }}>
//           Check your email for a copy or download below
//         </p>

//         {/* Ticket Card */}
//         <div
//           style={{
//             marginTop: "20px",
//             backgroundColor: "#12232e",
//             padding: "15px",
//             border: "1px solid #FFFFFF",
// //             position: "relative",
//           }}
//         >
//           <h3 style={{ fontSize: "18px", fontWeight: "bold", color: "white" }}>
//             Techember Fest '25
//           </h3>
//           <p style={{ color: "#ccc", fontSize: "12px" }}>
//             📍 64 Rumens Road, Ikoyi, Lagos
//           </p>
//           <p style={{ color: "#ccc", fontSize: "12px" }}>
//             📅 March 15, 2025 | 8:00 PM
//           </p>

//           <div
//             style={{
//               marginTop: "10px",
//               display: "flex",
//               justifyContent: "center",
//             }}
//           >
//             <img
//               src={attendeeData.image || "https://via.placeholder.com/80"}
//               alt="Profile"
//               style={{
//                 width: "70px",
//                 height: "70px",
//                 borderRadius: "50%",
//                 border: "2px solid #FFFFFF",
//               }}
//             />
//           </div>

//           <div
//             style={{
//               marginTop: "15px",
//               textAlign: "left",
//               color: "#ccc",
//               fontSize: "12px",
//               lineHeight: "1.5",
//             }}
//           >
//             <p>
//               <p style={{ color: "white" }}>Name:</p>{" "}
//               {attendeeData.name}
//             </p>
//             <p>
//               <p style={{ color: "white" }}>Email:</p>{" "}
//               {attendeeData.email}
//             </p>
//             <p>
//               <p style={{ color: "white" }}>Ticket Type:</p>{" "}
//               {ticketData.selectedTicket}
//             </p>
//             <p>
//               <p style={{ color: "white" }}>Ticket For:</p>{" "}
//               {ticketData.numTickets}
//             </p>
//             <p>
//               <p style={{ color: "white" }}>Special Request:</p> N/A
//             </p>
//           </div>

//           {/* Barcode */}
//           <div
//             style={{
//               marginTop: "15px",
//               backgroundColor: "white",
//               padding: "8px",
//               borderRadius: "5px",
//               textAlign: "center",
//               color: "black",
//               fontFamily: "monospace",
//               fontSize: "16px",
//             }}
//           >
//             234567 890236
//           </div>

//           {/* Download Button */}
//           <button
//             style={{
//               marginTop: "15px",
//               width: "100%",
//               backgroundColor: "#FFFFFF",
//               color: "white",
//               fontWeight: "bold",
//
//   //               border: "none",
//               cursor: "pointer",
//               transition: "background 0.3s ease",
//             }}
//             onMouseOver={(e) =>
//               (e.currentTarget.style.backgroundColor = "#0094cc")
//             }
//             onMouseOut={(e) =>
//               (e.currentTarget.style.backgroundColor = "#FFFFFF")
//             }
//           >
//             Download Ticket
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Ticket;
"use client";

import { default as React, useEffect, useState } from "react";
import Navbar from "./NavBar";

const TicketReady = () => {
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
        style={{
          position: "absolute",
          top: "10%",
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
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "white",
            fontStyle: "italic",
          }}
        >
          Techember Fest '25
        </h3>
        <p style={{ color: "#ccc", fontSize: "12px", marginTop: "-1.3rem" }}>
          📍 64 Rumens Road, Ikoyi, Lagos
        </p>
        <p style={{ color: "#ccc", fontSize: "12px", marginTop: "-0.8rem" }}>
          📅 March 15, 2025 | 8:00 PM
        </p>
      </div>
      {/* ✅ Circle at the Top */}
      <div
        style={{
          width: "150px",
          height: "150px",

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
