import React, { useReducer } from "react";
import { interviewReducer } from "../reducers/interviewReducer";
import InterviewCols from "./InterviewCols";
import "../styles.css";

const mockParticipants = [
  {
    id: "goncy",
    name: "Gonzalo Pozzo",
    step: "Entrevista técnica",
    idStep: 1,
    comments: "Medio pelo",
  },
  {
    id: "doe",
    name: "John Doe",
    step: "Entrevista inicial",
    idStep: 0,
    comments: "???",
  },
  {
    id: "goku",
    name: "Goku",
    step: "Asignacion",
    idStep: 3,
    comments: "xd",
  },
];

const mockSteps = [
  "Entrevista inicial",
  "Entrevista técnica",
  "Oferta",
  "Asignacion",
  "Rechazo",
];

const init = () => {
  return mockParticipants;
};

export const InterviewAdminApp = () => {
  const [participants, dispatch] = useReducer(interviewReducer, [], init);

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
