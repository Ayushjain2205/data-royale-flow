import React, { useState } from "react";
import ViewFile from "../Buttons/ViewFile";
import { toast } from "react-hot-toast";
import files from "../../data/files";

const ViewData = ({ type }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const data = files[type];

  const toggleRowSelection = (index) => {
    const newSelectedRows = [...selectedRows];
    if (newSelectedRows.includes(index)) {
      const idx = newSelectedRows.indexOf(index);
      newSelectedRows.splice(idx, 1);
    } else {
      newSelectedRows.push(index);
    }
    setSelectedRows(newSelectedRows);

    // Check if all rows are selected to update selectAll state
    if (newSelectedRows.length === data.length) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
  };

  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map((_, index) => index));
    }
    setSelectAll(!selectAll);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success("Copied to clipboard");
      })
      .catch((err) => {
        toast.error("Failed to copy");
      });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={selectAll}
                    onChange={toggleSelectAll}
                  />
                </label>
              </th>
              <th>File Name</th>
              <th>Contributor</th>
              <th>File ID</th>
              <th>
                {selectedRows.length > 1 && (
                  <button className="btn btn-ghost btn-xs">
                    <i className="fa-solid fa-download"></i>
                  </button>
                )}
              </th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((file, index) => (
              <tr
                key={index}
                className={selectedRows.includes(index) ? "bg-[#B8B8FF50]" : ""}
              >
                <th>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox"
                      checked={selectedRows.includes(index)}
                      onChange={() => toggleRowSelection(index)}
                    />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={`/file-icons/file-icon-${(index % 10) + 1}.svg`}
                          alt={`File icon for ${file.filename}`}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{file.filename}</div>
                      <div className="text-sm opacity-50">{file.size}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-ghost badge-sm">
                    {file.contributor.length > 15
                      ? `${file.contributor.slice(0, 15)}...`
                      : file.contributor}
                  </span>
                </td>
                <td>
                  <div className="tooltip" data-tip="Copy">
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => copyToClipboard(file.contributor)}
                    >
                      <i class="fa-solid fa-clipboard fa-lg"></i>
                    </button>
                  </div>
                </td>
                <td>
                  <ViewFile />
                </td>
                <td>
                  <div className="tooltip" data-tip="Download">
                    <button className="btn btn-ghost btn-xs">
                      <i className="fa-solid fa-download fa-lg"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewData;
