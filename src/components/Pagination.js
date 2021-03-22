import React from "react";

const Pagination = ({ prevPage, nextPage }) => {
  return (
    <div>
      {prevPage && (
        <button
          style={{
            background: "yellow",
            color: "blue",
            border: "transparent",
            outline: "none",
            borderRadius: "5rem",
            marginTop: "1.5rem",
            padding: "1rem",
            fontSize: "1.5rem",
            fontWeight: "600",
          }}
          onClick={prevPage}
        >
          PREV
        </button>
      )}
      {nextPage && (
        <button
          style={{
            background: "blue",
            color: "yellow",
            border: "transparent",
            outline: "none",
            borderRadius: "5rem",
            marginTop: "1.5rem",
            padding: "1rem",
            fontSize: "1.5rem",
            marginLeft: "1.5rem",
            fontWeight: "600",
          }}
          onClick={nextPage}
        >
          NEXT
        </button>
      )}
    </div>
  );
};

export default Pagination;
