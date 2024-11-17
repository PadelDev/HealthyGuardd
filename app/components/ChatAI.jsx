"use client"; // Tambahkan directive ini di bagian atas

import Head from "next/head";

export default function ChatAI() {
  return (
    <>
      <Head>
        <title>Chat AI</title>
      </Head>
      <div className="container">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="sidebar-header">
            <h2>HealthyAI</h2>
          </div>
          <ul className="menu">
            <li>HealthyAI</li>
            <li>Explore HealthyAI</li>
            <hr />
            <p>Yesterday</p>
            <li>Leher belakang pegel</li>
        
            <hr />
            <p>Previous 7 Days</p>
            <li>Obat Herbal</li>
        
          </ul>
          <div className="sidebar-footer">
            <button className="upgrade-btn">Upgrade Plan</button>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <h1>What can I help with?</h1>
          <input type="text" placeholder="Message HealthyAI" />
          <div className="button-group">
            <button>Create image</button>
            <button>Summarize text</button>
            <button>Analyze data</button>
            <button>Help me write</button>
            <button>More</button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          height: 100vh;
          color: white;
          background-color: #1e1e1e;
          font-family: Arial, sans-serif;
        }

        .sidebar {
          width: 300px;
          background-color: #2c2c2c;
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .sidebar-header h2 {
          color: white;
          font-size: 24px;
        }

        .menu {
          list-style: none;
          padding: 0;
        }

        .menu li {
          padding: 10px 0;
          cursor: pointer;
          font-size: 14px;
          color: #ccc;
        }

        .menu li:hover {
          color: white;
        }

        .menu hr {
          margin: 20px 0;
          border: 0.5px solid #444;
        }

        .sidebar-footer {
          text-align: center;
        }

        .upgrade-btn {
          background-color: #007aff;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
        }

        .main-content {
          flex: 1;
          padding: 50px;
          text-align: center;
          background-color: #1e1e1e;
        }

        h1 {
          font-size: 24px;
          margin-bottom: 20px;
        }

        input {
          width: 70%;
          padding: 10px;
          font-size: 16px;
          border-radius: 5px;
          border: 1px solid #444;
          margin-bottom: 20px;
          background-color: #2c2c2c;
          color: white;
        }

        .button-group {
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .button-group button {
          background-color: #007aff;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 14px;
        }

        .button-group button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </>
  );
}
