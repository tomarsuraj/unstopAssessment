// AssessmentCard.js

// Importing CSS module
import styles from "./AssessmentCard.module.css";

// Importing required icons
import { BsThreeDotsVertical, BsBriefcase, BsClock } from "react-icons/bs";
import { BiLinkAlt } from "react-icons/bi";

// Helper function to render enrollment status div based on index
const renderEnrollStatus = (index, val) => {
  if (index === 0)
    return renderEnrollDiv({ pos: styles.enroll1, name: val.name });
  if (index === 1)
    return renderEnrollDiv({ pos: styles.enroll2, name: val.name });
  if (index === 2)
    return renderEnrollDiv({ pos: styles.enroll3, name: val.name });
};

// Helper component for assessment details
const assessmentDetails = ({ val, name }) => (
  <div className={`dFlex fColumn mr5`}>
    <p className={`${styles.assessmentDetailsVal} fontWeight2 mt2`}>{val}</p>
    <p className={`${styles.assessmentDetailsName} fontWeight1 mt2`}>{name}</p>
  </div>
);

// Helper component for enrollment status div
const renderEnrollDiv = ({ pos, name }) => (
  <div
    className={`${styles.enroll} ${pos} dFlex flexJustifyCenter flexAlignCenter colorWhite`}
  >
    {name}
  </div>
);

// AssessmentCard component
const AssessmentCard = ({ name, type, date, details, enroll }) => {
  return (
    <div className={`${styles.container} mt5 p5`}>
      {/* Top section */}
      <div className={`${styles.top} dFlex flexJustifySpaceBetween`}>
        {/* Icon */}
        <div
          className={`${styles.iconWrapper} dFlex flexJustifyCenter flexAlignCenter mr5`}
        >
          <BsBriefcase size={24} />
        </div>
        {/* Title */}
        <div className={`${styles.title} colorText100`}>
          <h2>{name}</h2>
          {/* Subtitle */}
          <div className={`${styles.subTitle} dFlex flexAlignCenter mt2`}>
            <p className="colorText100 fontWeight2">{type} | </p>
            <BsClock size={16} className="colorText50 mr2 ml2" />
            <p className="colorText50 fontWeight1">{date}</p>
          </div>
        </div>
        {/* Three dots menu button */}
        <BsThreeDotsVertical size={20} className={styles.menuButton} />
      </div>

      {/* Bottom section */}
      <div
        className={`${styles.bottom} dFlex flexJustifySpaceBetween flexAlignCenter mt3`}
      >
        <div className="dFlex">
          {/* Assessment details */}
          {details.map((val) =>
            assessmentDetails({ name: val.name, val: val.val })
          )}
        </div>

        <div className="dFlex flexAlignCenter">
          {/* Share button */}
          <div
            className={`${styles.customButton} dFlex flexJustifySpaceAround flexAlignCenter p4`}
          >
            <BiLinkAlt size={16} />
            <p className="colorText100 fontWeight1">Share</p>
          </div>

          {/* Last enroll status */}
          <div className="dFlex flexAlignCenter ml3">
            <div
              className={`${styles.lastEnrollWrapper} dFlex flexAlignCenter`}
            >
              {/* Using the helper function to render enrollment status */}
              {enroll?.lastEnroll.map((val, index) =>
                renderEnrollStatus(index, val)
              )}
            </div>
            <p className={`fontWeight1 ${styles.enrollNumber}`}>
              +{enroll?.val}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentCard;
