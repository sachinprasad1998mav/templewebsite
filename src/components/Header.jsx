import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import mainLogo from "../images/ayodhyaLogo.jpg";

function Header() {
  const [headerWidth, setHeaderWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setHeaderWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const logoHeight = headerWidth * 0.1; // Set logo height as 10% of header width

  return (
    <div
      style={{
        backgroundColor: "#054672",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "5px 0", // Reduced padding
        maxWidth: "100%", // Ensuring the header doesn't exceed viewport width
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          marginBottom: "5px", // Adjusted margin bottom to reduce the gap
        }}
      >
        <div
          style={{
            flex: "0 0 auto",
            margin: "5px",
            height: `${logoHeight}px`,
            maxWidth: "50%",
          }}
        >
          {" "}
          {/* Set dynamic height and limit max width */}
          <img
            src={mainLogo}
            alt=""
            style={{ height: "100%", width: "auto" }}
          />{" "}
          {/* Set dynamic height */}
        </div>
        <h1 style={{ color: "white", margin: "5px" }}>
          North Texas Ayodhya Ram Mandir
        </h1>{" "}
        {/* Reduced margin */}
        <div
          style={{
            flex: "0 0 auto",
            margin: "5px",
            height: `${logoHeight}px`,
            maxWidth: "50%",
          }}
        >
          {" "}
          {/* Set dynamic height and limit max width */}
          <img
            src={mainLogo}
            alt=""
            style={{ height: "100%", width: "auto" }}
          />{" "}
          {/* Set dynamic height */}
        </div>
      </div>
      <NavBar />
    </div>
  );
}

export default Header;
