import React from "react";

export const ParticipantCard = ({
  participant,
  start,
  end,
  handlePrev,
  handleNext,
}) => {
  return (
    <div className="card p-3 mt-3">
      <div className="d-flex justify-content-between">
        <span className="mt-1">{participant.name}</span>
        <div>
          {!start && (
            <button
              onClick={() => handlePrev(participant)}
              className="btn btn-warning btn-sm"
            >
              {"<"}
            </button>
          )}
          {!end && (
            <button
              onClick={() => handleNext(participant)}
              className="me-1 ms-1 btn btn-warning btn-sm"
            >
              {">"}
            </button>
          )}
        </div>
      </div>
      <span className="text-muted mt-2">{participant.comments}</span>
    </div>
  );
};
