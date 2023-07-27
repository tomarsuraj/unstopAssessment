// Import React and necessary hooks
import React, { useState } from "react";

// Import react icon
import OutsideClickHandler from "react-outside-click-handler";
import { BiMenuAltLeft, BiSolidBarChartAlt2 } from "react-icons/bi";
import { MdSearch, MdFilterAlt } from "react-icons/md";

// Import CSS styles
import sty from "./Assessment.module.css";

// Import data and components
import { AssessmentCardList } from "../data/Assessment";
import AssessmentOverview from "../components/AssessmentsOverview";
import NewAssessmentCardClickable from "../components/NewAssessmentCardClickable";
import AddAssessmentForm from "../components/AddAssessmentForm";
import AssessmentCard from "../components/AssessmentCard";

// Main Assessment component
function Assessment({ openSideDrawer }) {
  // State variables to manage UI states
  const [isAssessmentOverViewClick, setIsAssessmentOverViewClick] =
    useState(false);
  const [isNewAssessmentClikc, setIsNewAssessmentClikc] = useState(false);

  // Handlers for opening and closing the new assessment form
  const openNewAssessmentForm = () => {
    setIsNewAssessmentClikc(true);
  };
  const closeNewAssessmentForm = () => {
    setIsNewAssessmentClikc(false);
  };

  return (
    <div className={sty.container}>
      {/* Top Bar */}
      <div className={sty.topBar}>
        <div className={sty.topBarTitleWrapper}>
          <div className={sty.iconWrapper} onClick={openSideDrawer}>
            <BiMenuAltLeft />
          </div>
          <h2 className={sty.topBarTitle}>Assessment</h2>
        </div>
        <div className={sty.topBarSubTitleWrapper}>
          <div className={`${sty.active}`}>
            <h3 className={`${sty.topBarSubTitle} `}>My Assessments</h3>
          </div>
          <div>
            <h3 className={`${sty.topBarSubTitle} ${sty.hideOnDesktop}`}>
              Unstop Assessments
            </h3>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className={sty.body}>
        {/* Assessment Overview */}
        <div
          className={
            isAssessmentOverViewClick
              ? sty.AssessmentOverviewDisplay
              : sty.AssessmentOverviewNone
          }
        >
          <AssessmentOverview />
        </div>

        {/* Title Bar */}
        <div
          className={`dFlex flexJustifySpaceBetween mb5 mt5 ${sty.titleBar}`}
        >
          <h2 className="fontSize4 fontWeight2 flex3">My Assessment</h2>
          <div
            className={`dFlex flexJustifySpaceBetween flex1  ${sty.titleBarIconWrapper}`}
          >
            <MdSearch size={20} />
            <MdFilterAlt size={20} />
            <BiSolidBarChartAlt2
              size={20}
              onClick={() =>
                setIsAssessmentOverViewClick((currentVal) => !currentVal)
              }
            />
          </div>
        </div>

        {/* Assessment Cards */}
        <div className={sty.AssessmentCardWrapper}>
          <NewAssessmentCardClickable
            openNewAssessmentForm={openNewAssessmentForm}
          />
          {AssessmentCardList.map((val, index) => (
            <AssessmentCard
              name={val.name}
              type={val.type}
              details={val.details}
              enroll={val.enroll}
              date={val.date}
              key={index}
            />
          ))}
        </div>
      </div>

      {/* New Assessment Form */}
      <OutsideClickHandler onOutsideClick={closeNewAssessmentForm}>
        {isNewAssessmentClikc ? (
          <AddAssessmentForm closeNewAssessmentForm={closeNewAssessmentForm} />
        ) : null}
      </OutsideClickHandler>
    </div>
  );
}

export default Assessment;
