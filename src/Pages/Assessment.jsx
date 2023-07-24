import sty from "./Assessment.module.css";
import { useState } from "react";

import OutsideClickHandler from "react-outside-click-handler";
import { AssessmentCardList } from "../data/Assessment";
import { BiMenuAltLeft, BiSolidBarChartAlt2 } from "react-icons/bi";
import { MdSearch, MdFilterAlt } from "react-icons/md";

import AddNewAssessmentCard from "../components/AddNewAssessmentCard";
import AssessmentCard from "../components/AssessmentCard";
import AssessmentOverview from "../components/AssessmentsOverview";
import NewAssessmentCard from "../components/NewAssessmentCard";

function Assessment({ openSideDrawer }) {
  const [isAssessmentOverViewClick, setIsAssessmentOverViewClick] =
    useState(false);

  const [isNewAssessmentClikc, setIsNewAssessmentClikc] = useState(false);
  const openNewAssessmentForm = () => {
    setIsNewAssessmentClikc(true);
  };
  const closeNewAssessmentForm = () => {
    setIsNewAssessmentClikc(false);
  };

  return (
    <div className={sty.container}>
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
          <h3 className={sty.topBarSubTitle}>Unstop Assessments</h3>
        </div>
      </div>

      <div className={sty.body}>
        <div
          className={
            isAssessmentOverViewClick
              ? sty.AssessmentOverviewDisplay
              : sty.AssessmentOverviewNone
          }
        >
          <AssessmentOverview />
        </div>

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
        <div className={sty.AssessmentCardWrapper}>
          <NewAssessmentCard openNewAssessmentForm={openNewAssessmentForm} />
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

      <OutsideClickHandler onOutsideClick={closeNewAssessmentForm}>
        {isNewAssessmentClikc ? (
          <AddNewAssessmentCard
            closeNewAssessmentForm={closeNewAssessmentForm}
          />
        ) : null}
      </OutsideClickHandler>
    </div>
  );
}
export default Assessment;
