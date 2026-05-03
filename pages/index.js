"use client";

import { useState } from "react";

export default function Home() {
  const [tracking, setTracking] = useState("");

  return (
    <div className="container">
      <div className="overlay"></div>

      <div className="content">
        <h1 className="title">Shipment Tracker</h1>

        <div className="searchBox">
          <input
            type="text"
            value={tracking}
            onChange={(e) => setTracking(e.target.value)}
            placeholder="Track shipment"
            className="input"
          />
        </div>
      </div>

      <style jsx>{`
        .container {
          height: 100vh;
          width: 100%;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;

          /* Background image */
          background-image: url("public/g44s.png.webp");
          background-size: cover;
          background-position: center;
        }

        /* Dark blue gradient overlay */
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            rgba(5, 20, 60, 0.85),
            rgba(2, 10, 40, 0.95)
          );
          z-index: 1;
        }

        .content {
          position: relative;
          z-index: 2;
          text-align: center;
          color: white;
        }

        .title {
          font-size: 2.5rem;
          margin-bottom: 20px;
          letter-spacing: 1px;
        }

        .searchBox {
          width: 320px;
        }

        .input {
          width: 100%;
          padding: 15px;
          border-radius: 8px;
          border: none;
          outline: none;
          font-size: 16px;

          /* glass effect */
          background: rgba(255, 255, 255, 0.1);
          color: white;
          backdrop-filter: blur(8px);
        }

        .input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }

        .input:focus::placeholder {
          opacity: 0.3;
        }
      `}</style>
    </div>
  );
}
