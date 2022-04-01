const mockSteps = [
  "Entrevista inicial",
  "Entrevista técnica",
  "Oferta",
  "Asignacion",
  "Rechazo",
];

export const interviewReducer = (state = [], action) => {
  switch (action.type) {
    case "prevStep":
      return state.map((participant) =>
        participant.id === action.payload.id
          ? {
              ...participant,
              step: mockSteps[action.payload.idStep - 1],
              idStep: action.payload.idStep - 1,
            }
          : participant
      );

    case "nextStep":
      return state.map((participant) =>
        participant.id === action.payload.id
          ? {
              ...participant,
              step: mockSteps[action.payload.idStep + 1],
              idStep: action.payload.idStep + 1,
            }
          : participant
      );

    default:
      return state;
  }
};
