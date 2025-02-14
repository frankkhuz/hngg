"use client";

import { Upload } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "./NavBar";

export default function AttendeeDetails() {
  const router = useRouter();
  const [image, setImage] = useState(null);
  const [imageUploaded, setImageUploaded] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth);

    // Update window width on resize
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setImageUploaded(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNext = () => {
    if (!imageUploaded) {
      alert("Please upload a profile photo.");
      return;
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    } else {
      setEmailError("");
    }

    // Save attendee data and image to localStorage
    const attendeeData = {
      name,
      email,
      image,
    };
    localStorage.setItem("attendeeData", JSON.stringify(attendeeData));
    router.push("/ticket");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#02191D",
        padding: "1rem",
      }}
    >
      <Navbar />
      <div
        style={{
          maxWidth: "40rem",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            backgroundColor: "#0E464F",
            border: "1px solid rgba(139, 92, 246, 0.3)",
            color: "white",
            padding: "2rem",
            border: " 1px solid #24A0B5",
            borderRadius: "1rem",
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
              <div style={{ fontSize: "12px", color: "white" }}>Step 2/3</div>
              <p style={{ fontFamily: "JejuMyeongjo", fontSize: "24px" }}>
                Attendee Details
              </p>
            </h2>
            <div
              style={{
                width: "66%",
                backgroundColor: "#24A0B5",
                height: "0.2rem",
                marginBottom: "1rem",
                marginTop: "-1rem",
              }}
            ></div>
          </div>
          <section style={{ display: "grid", gap: "1.5rem" }}>
            <div>
              <div
                style={{
                  backgroundColor: "#041E23",
                  padding: "2rem",
                  borderRadius: "0.5rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <label
                  style={{
                    display: "block",
                    fontSize: "0.875rem",
                    color: "#94a3b8",
                    marginBottom: "0.5rem",
                  }}
                >
                  Upload Profile Photo
                </label>
                <div
                  onClick={() => document.getElementById("fileInput").click()}
                  style={{
                    border: `2px dashed   ${
                      imageUploaded ? "#06b6d4" : "#24A0B5"
                    }`,
                    borderRadius: "0.5rem",
                    padding: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    backgroundColor: imageUploaded ? "#07373F" : "#07373F",
                    color: "white",
                    width: windowWidth >= 768 ? "50%" : "80%", // Adjust width based on screen size
                  }}
                >
                  <Upload
                    style={{
                      width: "1.5rem",
                      height: "1.5rem",
                      color: "#94a3b8",
                      marginBottom: "0.5rem",
                    }}
                  />
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: imageUploaded ? "#06b6d4" : "#94a3b8",
                    }}
                  >
                    {imageUploaded
                      ? "Profile photo uploaded"
                      : "Click to upload photo"}
                  </p>
                </div>
              </div>
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
            </div>

            {imageUploaded && (
              <div style={{ marginTop: "1rem", textAlign: "center" }}>
                <img
                  src={image}
                  alt="Profile preview"
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "2rem",
                    objectFit: "cover",
                    marginBottom: "0.5rem",
                  }}
                />
                <p style={{ fontSize: "0.875rem", color: "#94a3b8" }}>
                  Image preview
                </p>
              </div>
            )}

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  color: "white",
                  marginBottom: "0.5rem",
                }}
              >
                <div
                  style={{
                    width: "full",
                    backgroundColor: "#07373F",
                    height: "0.2rem",
                    marginBottom: "1rem",
                  }}
                ></div>
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  width: "90%",
                  backgroundColor: "transparent",
                  border: "1px solid #374151",
                  color: "white",
                  padding: "0.75rem 1rem",
                  borderRadius: "0.375rem",
                  marginBottom: "1rem",
                  border: "1px solid #24A0B5",
                }}
              />
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
                Email
              </label>
              <input
                type="email"
                placeholder="hello@avioflagos.io"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: "90%",
                  backgroundColor: "transparent",
                  border: "1px solid #374151",
                  color: "white",
                  padding: "0.75rem 1rem",
                  borderRadius: "0.375rem",
                  marginBottom: "1rem",
                  border: "1px solid #24A0B5",
                }}
              />
              {emailError && (
                <p style={{ color: "#f87171", fontSize: "0.875rem" }}>
                  {emailError}
                </p>
              )}
            </div>
            <label style={{ color: "white" }}>Special request?</label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                border: "1px solid #24A0B5",
                borderRadius: "0.5rem",
              }}
            >
              <textarea
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "white",
                  minHeight: "100px",
                  flex: 1,
                  padding: "8px",
                  borderRadius: "4px",
                  outline: "none",
                  resize: "none",
                  width: "95%",
                }}
                placeholder="Optional"
              />
            </div>

            {/* Back and Next Buttons */}
            {/* Back and Next Buttons */}
            <div className="button-container">
              <button
                onClick={() => router.back()}
                className="nav-button back-button"
              >
                Back
              </button>

              <button
                onClick={handleNext}
                className="nav-button next-button"
                disabled={!imageUploaded}
              >
                Get My Free Ticket
              </button>
            </div>

            <style jsx>{`
              .button-container {
                display: flex;
                justify-content: space-between;
                margin-top: 1.5rem;
                gap: 0.75rem;
              }

              .nav-button {
                padding: 0.75rem 1rem;
                border-radius: 0.5rem;
                border: none;
                color: white;
                cursor: pointer;
                width: 48%;
                transition: background 0.3s ease;
              }

              .back-button {
                background-color: transparent;
                border: 1px solid #24a0b5;
                color: white;
              }

              .next-button {
                background: #24a0b5;
                border: 1px solid #24a0b5;
                color: white;
              }

              .next-button:disabled {
                background: transparent;
                cursor: not-allowed;
              }

              /* Media Query for Mobile View */
              @media (max-width: 640px) {
                .button-container {
                  flex-direction: column;
                }

                .nav-button {
                  width: 100%;
                }
              }
            `}</style>
          </section>
        </div>
      </div>
    </div>
  );
}
