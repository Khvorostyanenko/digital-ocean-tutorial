import React, { useState } from "react";

export default function DivTogglerReact(initialValue = false) {
  const { showAlert } = useState(false);
  const { hideAlert } = useState(true);
  return (
    <div className="p-10">
      <div className="bg-green-400 p-10 mb-3">Alert content</div>
      <button
        type="button"
        onClick={() => showAlert(true)}
        className="bg-gray-500 p-4 mr-2"
      >
        Show alert
      </button>
      <button
        type="button"
        onClick={() => hideAlert(false)}
        className="bg-gray-500 p-4"
      >
        Hide alert
      </button>
    </div>
  );
}
