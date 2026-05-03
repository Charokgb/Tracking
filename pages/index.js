import { useState } from "react";

export default function Home() {
  const [tracking, setTracking] = useState("");

  return (
    <div className="container">
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

          /* ✅ IMAGE ONLY */
          background-image: url("/G4S_Västberga_2009.jpg");
          background-size: cover;
          background-position: center;

          /* ✅ BLUR EFFECT */
          filter: blur(4px);
        }

        /* ⚠️ IMPORTANT: keep content clear */
        .content {
          position: absolute;
          z-index: 2;
          color: white;

          display: flex;
          flex-direction: column;
          align-items: center;

          /* Remove blur from content */
          filter: none;
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

          background: rgba(0, 0, 0, 0.5);
          color: white;
        }

        .input::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }

        .button {
          padding: 15px 20px;
          background: #0a1f44;
          color: white;
          border: none;
          cursor: pointer;
          font-weight: bold;
        }

        .button:hover {
          background: #163a7a;
        }
      `}</style>
    </div>
  );
}
