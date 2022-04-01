import { ParticipantCard } from "./ParticipantCard";
import Modal from "react-modal";
import { ParticipantAddModal } from "./ParticipantAddModal";

const InterviewCols = ({
  titleCol,
  participants = [],
  start = false,
  end = false,
  handlePrev,
  handleNext,
  addParticipant,
}) => {
  const filterParticipant = participants?.filter(
    (participant) => participant.step === titleCol
  );

  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{titleCol}</h5>
          {/* Iterar array */}
          {filterParticipant.length === 0 ? (
            <div className="d-flex justify-content-center text-muted mt-5 p-3">
              No hay candidatos :({" "}
            </div>
          ) : (
            filterParticipant.map((participant) => (
              <ParticipantCard
                key={participant.id}
                participant={participant}
                start={start}
                end={end}
                handlePrev={handlePrev}
                handleNext={handleNext}
              />
            ))
          )}
          {/* Iterar array */}
          {start && <ParticipantAddModal />}
        </div>
      </div>
    </div>
  );
};

export default InterviewCols;
