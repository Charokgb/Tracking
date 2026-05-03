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

        .container::before {
          content: "";
          position: absolute;
          inset: 0;

          background-image: url("/G4S.jpg");
          background-repeat: no-repeat;
          background-position: center;
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

        .title {
          font-size: 1.8rem;
          margin-bottom: 20px;
        }

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
      `}</style>
    </div>
  );
}
