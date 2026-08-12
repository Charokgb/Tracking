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

      {/* DIALOG */}
      {showDialog && (
        <div className="dialogOverlay">
          <div className="dialog">

            {/* TITLE */}
            <h2 className="dialogTitle">
              Shipment History
            </h2>

            {/* SCROLLABLE HISTORY */}
            <div className="timeline">

              {/* STEP 1 */}
              <div className="step">
                <div className="dot"></div>
                <div className="line"></div>

                <div className="text">
                  <h3>Label created by Sender</h3>

                  <p>
                    Shipping information registered by G4S Australia
                  </p>

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
                  <h3>
                    Receiver Signed Confidentiality Agreement
                  </h3>

                  <p>
                    Signed: Fri 01 May, 8:12 am
                  </p>
                </div>
              </div>

              <div className="divider"></div>

              {/* STEP 3 */}
              <div className="step">
                <div className="dot"></div>
                <div className="line"></div>

                <div className="text">
                  <h3>
                    Awaiting Shipping and clearance fees
                  </h3>

                  <p>
                    Pending confirmation
                  </p>
                </div>
              </div>

              <div className="divider"></div>

              {/* STEP 4 */}
              <div className="step">
                <div className="dot"></div>
                <div className="line"></div>

                <div className="text">
                  <h3>
                    Shipping and clearance fees paid
                  </h3>

                  <p>
                    Signed: Thur 16 July, 10:02 am
                  </p>
                </div>
              </div>

              <div className="divider"></div>

              {/* STEP 5 */}
              <div className="step">
                <div className="dot"></div>
                <div className="line"></div>

                <div className="text">
                  <h3>
                    Shipment left sorting hub to Australia
                  </h3>

                  <p>
                    Signed: Mon 20 July, 10:12 am
                  </p>
                </div>
              </div>

              <div className="divider"></div>

              {/* STEP 6 */}
              <div className="step">
                <div className="dot"></div>
                <div className="line"></div>

                <div className="text">
                  <h3>
                    In Transit
                  </h3>

                  <p>
                    Signed: Thur 23 July, 8:41 am
                  </p>
                </div>
              </div>

              <div className="divider"></div>

              {/* STEP 7 */}
              <div className="step">
                <div className="dot"></div>
                <div className="line"></div>

                <div className="text">
                  <h3>
                    Shipment currently going through custom
                    clearance, Melbourne AU
                  </h3>

                  <p>
                    Signed: Fri 24 July, 10:33 am
                  </p>
                </div>
              </div>

              <div className="divider"></div>

              {/* STEP 8 */}
              <div className="step">
                <div className="dot"></div>
                <div className="line"></div>

                <div className="text">
                  <h3>
                    Customs clearance completed
                  </h3>

                  <p>
                    Signed: Wed 12 Aug, 09:22 am
                  </p>
                </div>
              </div>

              <div className="divider"></div>

              {/* STEP 9 */}
              <div className="step">
                <div className="dot"></div>
                <div className="line"></div>

                <div className="text">
                  <h3>
                    In transit
                  </h3>

                  <p>
                    Signed: Wed 12 Aug, 10:51 pm
                  </p>
                </div>
              </div>

            </div>

            {/* CLOSE BUTTON */}
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

          overflow: hidden;
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

          width: 350px;
          max-width: 90vw;

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

        .input::placeholder {
          color: #ccc;
        }

        .button {
          padding: 12px 16px;

          background: #0a1f44;

          color: white;

          border: none;

          cursor: pointer;
        }

        .button:hover {
          background: #102b5c;
        }

        .error {
          margin-top: 10px;

          color: #ff4d4d;
        }

        /* =========================
           DIALOG OVERLAY
        ========================= */

        .dialogOverlay {
          position: fixed;

          inset: 0;

          background: rgba(0, 0, 0, 0.7);

          display: flex;

          justify-content: center;
          align-items: center;

          z-index: 10;

          /*
            Gives the dialog some breathing
            room on smaller screens.
          */
          padding: 20px;

          box-sizing: border-box;
        }

        /* =========================
           DIALOG
        ========================= */

        .dialog {
          background: white;

          color: black;

          padding: 20px;

          border-radius: 10px;

          width: 320px;

          max-width: 90vw;

          /*
            IMPORTANT:
            The dialog cannot become taller
            than 85% of the screen.
          */
          max-height: 85vh;

          /*
            Makes the dialog a vertical
            flex container.
          */
          display: flex;

          flex-direction: column;

          box-sizing: border-box;
        }

        /* =========================
           TITLE
        ========================= */

        .dialogTitle {
          margin: 0 0 15px 0;

          font-size: 18px;

          /*
            Prevent title from shrinking
            when the history gets long.
          */
          flex-shrink: 0;
        }

        /* =========================
           TIMELINE
        ========================= */

        .timeline {
          position: relative;

          /*
            THIS IS WHAT MAKES THE
            HISTORY SCROLLABLE.
          */
          overflow-y: auto;

          /*
            Takes up the remaining
            available space.
          */
          flex: 1;

          /*
            Very important when using
            overflow inside flexbox.
          */
          min-height: 0;

          /*
            Gives some space between
            text and scrollbar.
          */
          padding-right: 8px;
        }

        /* =========================
           STEP
        ========================= */

        .step {
          position: relative;

          padding-left: 30px;

          margin-bottom: 15px;
        }

        /* =========================
           DOT
        ========================= */

        .dot {
          width: 12px;
          height: 12px;

          background: white;

          border: 2px solid #1e4db7;

          border-radius: 50%;

          position: absolute;

          left: 0;
          top: 5px;

          box-sizing: border-box;
        }

        /* =========================
           TIMELINE LINE
        ========================= */

        .line {
          position: absolute;

          left: 5px;

          top: 18px;

          width: 2px;

          height: 40px;

          background: #1e4db7;
        }

        /* =========================
           TEXT
        ========================= */

        .text h3 {
          font-size: 14px;

          font-weight: bold;

          margin: 0 0 4px 0;

          line-height: 1.35;
        }

        .text p {
          font-size: 13px;

          margin: 0 0 3px 0;

          line-height: 1.4;
        }

        .text span {
          font-size: 12px;

          color: gray;

          line-height: 1.4;
        }

        /* =========================
           DIVIDER
        ========================= */

        .divider {
          height: 1px;

          background: #eee;

          margin: 10px 0;
        }

        /* =========================
           CLOSE BUTTON
        ========================= */

        .closeBtn {
          margin-top: 15px;

          padding: 8px 12px;

          border: none;

          background: #0a1f44;

          color: white;

          cursor: pointer;

          border-radius: 5px;

          /*
            Prevents the button from
            being pushed away by the
            long timeline.
          */
          flex-shrink: 0;
        }

        .closeBtn:hover {
          background: #102b5c;
        }

        /* =========================
           SCROLLBAR
        ========================= */

        .timeline::-webkit-scrollbar {
          width: 6px;
        }

        .timeline::-webkit-scrollbar-track {
          background: #f5f5f5;

          border-radius: 10px;
        }

        .timeline::-webkit-scrollbar-thumb {
          background: #bbb;

          border-radius: 10px;
        }

        .timeline::-webkit-scrollbar-thumb:hover {
          background: #999;
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 480px) {
          .dialog {
            width: 100%;

            max-width: 350px;

            max-height: 85vh;

            padding: 16px;
          }

          .dialogTitle {
            font-size: 17px;
          }

          .text h3 {
            font-size: 13px;
          }

          .text p {
            font-size: 12px;
          }

          .text span {
            font-size: 11px;
          }
        }
      `}</style>
    </div>
  );
}
