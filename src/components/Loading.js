import React from "react";
import loading from "./loading.gif";

function Loading() {
  return (
    <div className="mt-5 mb-5 text-center">
      {/* <h3 className="text-center">Loading... Please wait</h3> */}
      <img src={loading} alt="loading" />
    </div>
  );
}

export default Loading;
