// NewAssessmentCardClickable.js

import React from "react";
import sty from "./NewAssessmentCardClickable.module.css";
import { AiOutlinePlus } from "react-icons/ai";

// NewAssessmentCardClickable component definition
function NewAssessmentCardClickable({ openNewAssessmentForm }) {
  return (
    // Clickable container for creating a new assessment
    <div
      className={`borderPrimary mt5 ${sty.container}`}
      onClick={openNewAssessmentForm}
    >
      {/* Icon wrapper */}
      <div className={sty.iconWrapper}>
        <AiOutlinePlus />
      </div>
      {/* Heading */}
      <h4 className="mt4">New Assessment</h4>
      {/* Description */}
      <p className="mt4 mb5">
        From here you can add questions of multiple types like MCQs, subjective
        (text or paragraph)!
      </p>
    </div>
  );
}

export default NewAssessmentCardClickable;
