import sty from "./NewAssessmentCard.module.css";
import { AiOutlinePlus } from "react-icons/ai";

function NewAssessmentCard({ openNewAssessmentForm }) {
  return (
    <div
      className={`borderPrimary mt5 ${sty.container}`}
      onClick={openNewAssessmentForm}
    >
      <div className={sty.iconWrapper}>
        <AiOutlinePlus />
      </div>
      <h4 className="mt4">New Assessment</h4>
      <p className="mt4 mb5">
        From here you can add questions of multiple types like MCQs, subjective
        (text or paragraph)!
      </p>
    </div>
  );
}

export default NewAssessmentCard;
