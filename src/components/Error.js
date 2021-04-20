import React, { useState } from "react";

export default function Error(props) {
  return (
    <div className="errorMessage">
      <h3>{props.message}</h3>
    </div>
  );
}
