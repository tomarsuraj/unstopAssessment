/* AddAssessmentForm.jsx */

import React from "react";
import sty from "./AddAssessmentForm.module.css";
import { RxCross2 } from "react-icons/rx";

function AddAssessmentForm({ closeNewAssessmentForm }) {
  // Temporary skill list
  const skillListTemp = [
    "UI/UX and Design",
    "Web Development",
    "UI/UX and Design",
    "No of Question",
    "Web Development",
  ];

  function handleSubmit(e) {
    e.preventDefault();
    console.log("handleSubmit");
  }

  // Render each skill item
  const renderSkill = (name, handleClose) => (
    <span className={sty.skill}>
      {name} <RxCross2 onClick={handleClose} />
    </span>
  );

  return (
    <div className={`borderPrimary ${sty.container}`}>
      {/* Header */}
      <div className="dFlex flexJustifySpaceBetween flexAlignCenter borderPrimaryBottom p5">
        <h2 className={sty.title}>Sub-Section Details</h2>
        <div
          className={sty.closeButtonWrapper}
          onClick={closeNewAssessmentForm}
        >
          <RxCross2 />
        </div>
      </div>

      {/* Assessment Form */}
      <form onSubmit={handleSubmit} className={sty.form}>
        <label htmlFor="name" className={sty.formLabel}>
          Name of assessment
        </label>
        <input
          className={sty.formInput}
          type="text"
          name="name"
          placeholder="Type here"
        />

        <label htmlFor="purpose" className={sty.formLabel}>
          Purpose of the test is
        </label>
        <input
          className={sty.formInput}
          type="text"
          name="purpose"
          placeholder="Select"
        />

        <label htmlFor="description" className={sty.formLabel}>
          Description
        </label>
        <input
          className={sty.formInput}
          type="text"
          name="description"
          placeholder="Select"
        />

        <label htmlFor="skills" className={sty.formLabel}>
          Skills
        </label>
        <div className={sty.skillWrapper}>
          {skillListTemp.map((val) => renderSkill(val))}
          <input
            className={sty.formInput}
            type="text"
            name="skills"
            placeholder="Type here"
          />
        </div>

        <label htmlFor="duration" className={sty.formLabel}>
          Duration of Assessment
        </label>
        <input
          className={sty.formInput}
          type="text"
          name="duration"
          placeholder="HH:MM:SS"
        />
      </form>

      {/* Next Button */}
      <div className={sty.buttonWrapper}>
        <button type="submit" className={sty.formButton}>
          Next
        </button>
      </div>
    </div>
  );
}

export default AddAssessmentForm;
