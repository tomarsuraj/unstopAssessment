import { useState } from "react";
import sty from "./AddNewAssessmentCard.module.css";
import { RxCross2 } from "react-icons/rx";
function AddNewAssessmentCard({ closeNewAssessmentForm }) {
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
  return (
    <div className={` borderPrimary ${sty.container}`}>
      <div className="dFlex flexJustifySpaceBetween flexAlignCenter borderPrimaryBottom p5">
        <h2 className={sty.title}>Sub-Section Details</h2>
        <div
          className={sty.closeButtonWrapper}
          onClick={closeNewAssessmentForm}
        >
          <RxCross2 />
        </div>
      </div>
      <form onSubmit={handleSubmit} className={sty.form}>
        <label htmlFor="name" className={sty.formLable}>
          Name of assessmen
        </label>
        <input
          className={sty.formInput}
          type="text"
          name="name"
          placeholder="Type here"
        />
        <label htmlFor="purpose" className={sty.formLable}>
          Purpose of the test is
        </label>

        <input
          className={sty.formInput}
          type="text"
          name="purpose"
          placeholder="Select"
        />
        <label htmlFor="description" className={sty.formLable}>
          Description
        </label>
        <input
          className={sty.formInput}
          type="text"
          name="description"
          placeholder="Select"
        />

        <label htmlFor="skills" className={sty.formLable}>
          Skills
        </label>
        <div className={sty.skillWrapper}>
          {skillListTemp.map((val) => skill(val))}
          <input
            className={sty.formInput}
            type="text"
            name="skills"
            placeholder="Type here"
          />
        </div>
        <label htmlFor="duration" className={sty.formLable}>
          Duration of Assessment
        </label>
        <input
          className={sty.formInput}
          type="text"
          name="duration"
          placeholder="HH:MM:SS"
        />
      </form>
      <div className={sty.buttonWraper}>
        <button type="submit" className={sty.formButtom}>
          Next
        </button>
      </div>
    </div>
  );
}

export default AddNewAssessmentCard;

const skill = (name, handleClose) => (
  <span className={sty.skill}>
    {name} <RxCross2 onClick={handleClose} />
  </span>
);
