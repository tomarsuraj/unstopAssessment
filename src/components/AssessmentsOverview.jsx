import sty from "./AssessmentsOverview.module.css";
import { FiServer, FiLink2 } from "react-icons/fi";
import { MdOutlinePeople } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";

const AssessmentOverview = () => {
  return (
    <>
      <div className={sty.title}>
        <h2 className="fontWeight1 fontSize5">Assessments Overview</h2>
      </div>
      <div className={sty.container + " mt5 borderPrimary"}>
        <div className={`dFlex ${sty.topContainer}`}>
          <div className={`p5 ${sty.totalAssessmentContainer}`}>
            <h2 className={`${sty.heading}`}>Total Assessment</h2>
            <div className="dFlex  flexAlignCenter mt5">
              <span
                className={`${sty.iconWrapper}  ${sty.iconWrapperPurple} dFlex flexJustifyCenter flexAlignCenter mr5`}
              >
                <FiServer size={20} />
              </span>
              <span className={sty.value}>84</span>
            </div>
          </div>
          <div className={`p5 ml5 ${sty.purposeContainerMobile}`}>
            <h2 className={sty.heading}>Total Purpose</h2>
            <div className="dFlex  flexAlignCenter mt5">
              <span
                className={`${sty.iconWrapper}  ${sty.iconWrapperSecondary} dFlex flexJustifyCenter flexAlignCenter mr5`}
              >
                <FiLink2 size={20} />
              </span>
              <span className={sty.value}>84</span>
            </div>
          </div>
        </div>

        <div className={`p5 ${sty.middleContainer}`}>
          <h2 className={sty.heading}> Candidates</h2>
          <div className={`dFlex mt5 flexAlignCenter `}>
            <div className="dFlex flexJustifyCenter flexAlignCenter  mr5 pr5 borderPrimaryRight">
              <span
                className={`${sty.iconWrapper}  ${sty.iconWrapperPurple} dFlex flexJustifyCenter flexAlignCenter mr5`}
              >
                <MdOutlinePeople size={20} />
              </span>
              <div>
                <p className={sty.value}>
                  84 <span className={sty.newValue}>+98</span>
                </p>

                <p className={sty.valueName}>Total Candidate</p>
              </div>
            </div>
            <div>
              <p className={sty.value}>
                11,2 <span className={sty.newValue}>+98</span>
              </p>
              <p className={sty.valueName}>Who Attamped</p>
            </div>
          </div>
        </div>

        <div className={`p5 ${sty.bottomContainer}`}>
          <h2 className={sty.heading}> Candidates Source</h2>

          <div className="dFlex flexAlignCenter mt5">
            <div className="dFlex  flexAlignCenter  mr5">
              <span
                className={`${sty.iconWrapper}  ${sty.iconWrapperPink} dFlex flexJustifyCenter flexAlignCenter mr5`}
              >
                <TbWorldWww size={20} />
              </span>
              <div className="borderPrimaryRight pr5">
                <p className={sty.value}>
                  11,000 <span className={sty.newValue}>+89</span>
                </p>
                <p className={sty.valueName}>E-mail</p>
              </div>
            </div>
            <div className=" mr5 pr5 borderPrimaryRight ">
              <p className={sty.value}>
                11,000 <span className={sty.newValue}>+89</span>
              </p>
              <p className={sty.valueName}>Social Share</p>
            </div>
            <div>
              <p className={sty.value}>
                11,000 <span className={sty.newValue}>+89</span>
              </p>
              <p className={sty.valueName}>Unique Link</p>
            </div>
          </div>
        </div>

        <div className={`p5 ml5 ${sty.purposeContainerDesktop}`}>
          <h2 className={sty.heading}> Total Purpose</h2>
          <div className="dFlex  flexAlignCenter mt5">
            <span
              className={`${sty.iconWrapper}  ${sty.iconWrapperSecondary} dFlex flexJustifyCenter flexAlignCenter mr5`}
            >
              <FiLink2 size={20} />
            </span>
            <span className={sty.value}>84</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssessmentOverview;
