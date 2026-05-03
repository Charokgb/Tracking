import { useState } from "react";

export default function Home() {
  const [tracking, setTracking] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [error, setError] = useState("");

  const handleTrack = () => {
    if (tracking === "AU1304462U09") {
      setError("");
      setShowDialog(true);
    } else {
      setShowDialog(false);
      setError("Shipment not found");
    }
  };

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
          <button className="button" onClick={handleTrack}>
            Track
          </button>
        </div>

        {/* ❌ ERROR MESSAGE */}
        {error && <p className="error">{error}</p>}
      </div>

      {/* ✅ DIALOG BOX */}
      {showDialog && (
        <div className="dialogOverlay">
          <div className="dialog">
            <h2>Shipment History</h2>

            <ul>
              <li>📦 Package received – Lagos</li>
              <li>🚚 In transit – Abuja</li>
              <li>✈️ Departed facility – London</li>
              <li>📍 Arrived at destination – New York</li>
              <li>✅ Ready for delivery</li>
            </ul>

            <button onClick={() => setShowDialog(false)} className="closeBtn">
              Close
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .container {
          position: relative;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .container::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url("/G4S.jpg");
          background-size: cover;
          background-position: center;
          filter: blur(2px) brightness(0.6);
          z-index: 0;
        }

        .content {
          position: relative;
          z-index: 2;
          text-align: center;
          color: white;
        }

        .title {
          font-size: 1.8rem;
          margin-bottom: 20px;
        }

        .searchBox {
          display: flex;
          max-width: 350px;
          margin: 0 auto;
          overflow: hidden;
          border-radius: 6px;
        }

        .input {
          flex: 1;
          padding: 12px;
          border: none;
          outline: none;
          background: rgba(0, 0, 0, 0.6);
          color: white;
        }

        .button {
          padding: 12px 16px;
          background: #0a1f44;
          color: white;
          border: none;
          cursor: pointer;
        }

        .error {
          margin-top: 10px;
          color: #ff4d4d;
        }

        /* 🔥 DIALOG STYLING */
        .dialogOverlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10;
        }

        .dialog {
          background: white;
          color: black;
          padding: 20px;
          border-radius: 8px;
          width: 300px;
          text-align: left;
        }

        .dialog h2 {
          margin-bottom: 10px;
        }

        .dialog ul {
          padding-left: 20px;
          margin-bottom: 15px;
        }

        .closeBtn {
          padding: 8px 12px;
          border: none;
          background: #0a1f44;
          color: white;
          cursor: pointer;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}
