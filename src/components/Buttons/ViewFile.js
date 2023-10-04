import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const ViewFile = () => {
  return (
    <div className="tooltip" data-tip="View File">
      <button
        className="btn btn-ghost btn-xs"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        <i className="fa-solid fa-eye fa-lg"></i>
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">File</h3>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default ViewFile;
