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

        {error && <p className="error">{error}</p>}
      </div>

      {/* 🔥 DIALOG */}
      {showDialog && (
        <div className="dialogOverlay">
          <div className="dialog">
            <h2 className="dialogTitle">Shipment History</h2>

            <div className="timeline">
              {/* STEP 1 */}
              <div className="step">
                <div className="dot"></div>
                <div className="line"></div>

                <div className="text">
                  <h3>Label created by Sender</h3>
                  <p>Shipping information registered by G4S Australia</p>
                  <span>
                    Spenser Park, WA • Mon 27 April, 12:33PM
                  </span>
                </div>
              </div>

              <div className="divider"></div>

              {/* STEP 2 */}
              <div className="step">
                <div className="dot"></div>
                <div className="line"></div>

                <div className="text">
                  <h3>Receiver Signed Confidentiality Agreement</h3>
                  <p>Signed: Fri 01 May, 8:12 am</p>
                </div>
              </div>

              <div className="divider"></div>

              {/* STEP 3 */}
              <div className="step">
                <div className="dot"></div>

                <div className="text">
                  <h3>Awaiting Shipping and clearance fees</h3>
                  <p>Pending confirmation</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowDialog(false)}
              className="closeBtn"
            >
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
          background-image: url("/g4s.png");
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

        /* DIALOG */
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
          border-radius: 10px;
          width: 320px;
        }

        .dialogTitle {
          margin-bottom: 15px;
          font-size: 18px;
        }

        /* TIMELINE */
        .timeline {
          position: relative;
        }

        .step {
          position: relative;
          padding-left: 30px;
          margin-bottom: 15px;
        }

        .dot {
          width: 12px;
          height: 12px;
          background: white;
          border: 2px solid #1e4db7;
          border-radius: 50%;
          position: absolute;
          left: 0;
          top: 5px;
        }

        .line {
          position: absolute;
          left: 5px;
          top: 18px;
          width: 2px;
          height: 40px;
          background: #1e4db7;
        }

        .text h3 {
          font-size: 14px;
          font-weight: bold;
          margin-bottom: 4px;
        }

        .text p {
          font-size: 13px;
          margin: 0;
        }

        .text span {
          font-size: 12px;
          color: gray;
        }

        .divider {
          height: 1px;
          background: #eee;
          margin: 10px 0;
        }

        .closeBtn {
          margin-top: 15px;
          padding: 8px 12px;
          border: none;
          background: #0a1f44;
          color: white;
          cursor: pointer;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
}
