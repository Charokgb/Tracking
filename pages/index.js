import { useState } from "react";

export default function Home() {
  const [tracking, setTracking] = useState("");

  return (
    <div className="container">
      <div className="overlay"></div>

      <div className="content">
        <h1 className="title">G4S CONFIDENTIAL TRACKER</h1>

        <div className="searchBox">
          <input
            type="text"
            value={tracking}
            onChange={(e) => setTracking(e.target.value)}
            placeholder="Track shipment"
            className="input"
          />
          <button className="button">Track</button>
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

          /* ✅ YOUR IMAGE */
          background-image: url("/G4S_Västberga_2009.jpg");
          background-size: cover;
          background-position: center;

          /* ✅ BRIGHTNESS GOES HERE */
          filter: brightness(1.1);
        }

        /* ✅ OVERLAY (on top of image) */
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;

          background: linear-gradient(
            to bottom,
            rgba(5, 20, 60, 0.55),
            rgba(2, 10, 40, 0.75)
          );

          z-index: 1;
        }

        /* ✅ CONTENT (above everything) */
        .content {
          position: relative;
          z-index: 2;
          color: white;

          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .title {
          font-size: 2.5rem;
          margin-bottom: 20px;
          letter-spacing: 1px;
          text-align: center;
        }

        .searchBox {
          display: flex;
          width: 400px;
          border-radius: 8px;
          overflow: hidden;
        }

        .input {
          flex: 1;
          padding: 15px;
          border: none;
          outline: none;
          font-size: 16px;

          background: rgba(255, 255, 255, 0.1);
          color: white;
          backdrop-filter: blur(8px);
        }

        .input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }

        .button {
          padding: 15px 20px;
          background: #0a1f44;
          color: white;
          border: none;
          cursor: pointer;
          font-weight: bold;
          transition: 0.3s;
        }

        .button:hover {
          background: #163a7a;
        }
      `}</style>
    </div>
  );
}
