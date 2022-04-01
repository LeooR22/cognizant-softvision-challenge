import React, { useEffect, useReducer } from "react";
import { interviewReducer } from "../reducers/interviewReducer";
import InterviewCols from "./InterviewCols";
import "../styles.css";

const mockSteps = [
  "Entrevista inicial",
  "Entrevista técnica",
  "Oferta",
  "Asignacion",
  "Rechazo",
];

const init = () => {
  return JSON.parse(localStorage.getItem("participants")) || [];
};
export const InterviewAdminApp = () => {
  const [participants, dispatch] = useReducer(interviewReducer, [], init);

  useEffect(() => {
    localStorage.setItem("participants", JSON.stringify(participants));
  }, [participants]);

  const handleAdd = (newParticipant) => {
    dispatch({
      type: "add",
      payload: newParticipant,
    });
  };

  const handlePrev = (participant) => {
    dispatch({
      type: "prevStep",
      payload: participant,
    });
  };

  const handleNext = (participant) => {
    dispatch({
      type: "nextStep",
      payload: participant,
    });
  };

  return (
    <div>
      <div className="">
        <div className="row row-cols-1 row-cols-md-5 me-2 ms-2 mt-5">
          <InterviewCols
            handleNext={handleNext}
            handlePrev={handlePrev}
            participants={participants}
            start={true}
            titleCol={mockSteps[0]}
            handleAdd={handleAdd}
          />
          <InterviewCols
            handleNext={handleNext}
            handlePrev={handlePrev}
            participants={participants}
            titleCol={mockSteps[1]}
          />
          <InterviewCols
            handleNext={handleNext}
            handlePrev={handlePrev}
            participants={participants}
            titleCol={mockSteps[2]}
          />
          <InterviewCols
            handleNext={handleNext}
            handlePrev={handlePrev}
            participants={participants}
            titleCol={mockSteps[3]}
          />
          <InterviewCols
            end={true}
            handleNext={handleNext}
            handlePrev={handlePrev}
            participants={participants}
            titleCol={mockSteps[4]}
          />
        </div>
      </div>
    </div>
  );
};
