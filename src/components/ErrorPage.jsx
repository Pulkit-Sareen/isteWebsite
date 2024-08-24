import React from "react";

function ErrorPage() {
  return (
    <div
      style={{
        overflow: "hidden",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        rowGap: "3rem",
        color: "white",
      }}
    >
      <div
        style={{
          fontSize: "xx-large",
        }}
      >
        ERROR: 404
      </div>
      <div
        style={{
          fontSize: "large",
          fontStyle: "italic",
        }}
      >
        NOT FOUND!
      </div>
    </div>
  );
}

export default ErrorPage;
