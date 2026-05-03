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

          /* ✅ FIXED IMAGE PATH */
          background-image: url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d");
          background-size: cover;
          background-position: center;
        }

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
          color: white;

          /* ✅ CENTER FIX */
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

        /* ✅ INPUT + BUTTON ROW */
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
