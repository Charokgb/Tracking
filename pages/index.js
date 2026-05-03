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
          position: relative;
          height: 100vh;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }

        /* 🔥 BACKGROUND (LESS BLUR, BETTER BALANCE) */
        .container::before {
          content: "";
          position: absolute;
          inset: 0;

          background: url("/G4S.jpg") no-repeat center center;
          background-size: cover;

          filter: blur(2px) brightness(0.6);
          transform: scale(1.05);

          z-index: 0;
        }

        .content {
          position: relative;
          z-index: 2;
          color: white;
          text-align: center;
          padding: 20px;
        }

        /* ✅ FIXED TITLE SIZE */
        .title {
          font-size: 1.8rem;
          margin-bottom: 20px;
          letter-spacing: 1px;
        }

        /* ✅ RESPONSIVE SEARCH BAR */
        .searchBox {
          display: flex;
          width: 100%;
          max-width: 350px;
          margin: 0 auto;
          border-radius: 6px;
          overflow: hidden;
        }

        .input {
          flex: 1;
          padding: 12px;
          border: none;
          outline: none;
          font-size: 14px;

          background: rgba(0, 0, 0, 0.6);
          color: white;
        }

        .input::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }

        .button {
          padding: 12px 16px;
          background: #0a1f44;
          color: white;
          border: none;
          cursor: pointer;
          font-weight: bold;
        }

        .button:hover {
          background: #163a7a;
        }

        /* 📱 MOBILE FIX */
        @media (max-width: 480px) {
          .title {
            font-size: 1.4rem;
          }

          .searchBox {
            max-width: 90%;
          }
        }
      `}</style>
    </div>
  );
}          content: "";
          position: absolute;
          inset: 0;

          background: url("/G4S.jpg") no-repeat center center;
          background-size: cover;

          filter: blur(5px) brightness(0.7);
          transform: scale(1.1); /* prevents blur edges */

          z-index: 0;
        }

        /* CONTENT ON TOP */
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

        /* SEARCH BAR */
        .searchBox {
          display: flex;
          width: 420px;
          border-radius: 8px;
          overflow: hidden;
        }

        .input {
          flex: 1;
          padding: 15px;
          border: none;
          outline: none;
          font-size: 16px;

          background: rgba(0, 0, 0, 0.6);
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
          transition: 0.3s;
        }

        .button:hover {
          background: #163a7a;
        }
      `}</style>
    </div>
  );
}
