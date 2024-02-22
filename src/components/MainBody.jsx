import React from "react";
import ramLalla from "../images/ramLalla.jpeg";

function MainBody() {
  return (
    <div className="component" style={{ marginTop: "10px" }}>
      <img
        className="rounded mx-auto d-block"
        src={ramLalla}
        style={{ height: "200px", width: "200px" }}
        alt="ramLalla Image"
        srcset=""
      />
      <h4 style={{ textAlign: "center" }}>
        This is the website in progress for the upcoming Grand project of North
        Texas Ayodhya Ram Mandir. Stay Tuned for Updates.
      </h4>
    </div>
  );
}

export default MainBody;
