import sty from "./AssessmentCard.module.css";
import { BsThreeDotsVertical, BsBriefcase, BsClock } from "react-icons/bs";
import { BiLinkAlt } from "react-icons/bi";
const AssessmentCard = ({ name, type, date, details, enroll }) => {
  return (
    <div className={sty.container + " mt5 p5"}>
      <div className={sty.top + " dFlex flexJustifySpaceBetween "}>
        <div
          className={
            sty.iconWraper + " dFlex flexJustifyCenter flexAlignCenter mr5"
          }
        >
          <BsBriefcase size={24} className="colorAccentPurple" />
        </div>
        <div className={sty.title + " colorText100"}>
          <h2>{name}</h2>
          <div className={sty.subTitle + " dFlex flexAlignCenter mt2"}>
            <p className="colorText100 fontWeight2">{type} | </p>
            <BsClock size={16} className="colorText50 mr2 ml2" />
            <p className="colorText50 fontWeight1">{date}</p>
          </div>
        </div>
        <BsThreeDotsVertical size={20} className={sty.menuButton} />
      </div>
      <div
        className={
          sty.bottom + " dFlex flexJustifySpaceBetween flexAlignCenter mt3"
        }
      >
        <div className="dFlex">
          {details.map((val) =>
            assessmentDetails({ name: val.name, val: val.val })
          )}
        </div>

        <div className="dFlex flexAlignCenter">
          <div
            className={
              sty.customButton +
              " dFlex flexJustifySpaceAround flexAlignCenter p4"
            }
          >
            <BiLinkAlt size={16} />
            <p className=" colorText100 fontWeight1">Share</p>
          </div>

          <div className="dFlex  flexAlignCenter ml3">
            <div className={sty.lastEnrollWrapper + " dFlex flexAlignCenter"}>
              {enroll?.lastEnroll.map((val, index) => {
                if (index == 0)
                  return enrollDiv({ pos: sty.enroll3, name: val.name });
                if (index == 1)
                  return enrollDiv({ pos: sty.enroll2, name: val.name });
                if (index == 2)
                  return enrollDiv({ pos: sty.enroll1, name: val.name });
              })}
            </div>
            <p className={`fontWeight1 ${sty.enrollNumber}`}>+{enroll?.val}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentCard;

const assessmentDetails = ({ val, name }) => (
  <div className={" dFlex fColumn mr5"}>
    <p className={` ${sty.assessmentDetailsVal} fontWeight2 mt2`}>{val}</p>
    <p className={`  ${sty.assessmentDetailsName} fontWeight1 mt2`}>{name}</p>
  </div>
);

const enrollDiv = ({ pos, name }) => (
  <div
    className={`${sty.enroll} ${pos} dFlex flexJustifyCenter flexAlignCenter colorWhite`}
  >
    {name}
  </div>
);
