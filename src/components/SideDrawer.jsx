import sty from "./SideDrawer.module.css";
import { RxCross2 } from "react-icons/rx";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiNotePencilBold } from "react-icons/pi";
import { MdOutlineQuiz } from "react-icons/md";
import admin_meds from "../assets/admin_meds.svg";
function SideDrawer({ closeSideDrawer }) {
  return (
    <div className={sty.container}>
      <div
        className={`dFlex flexJustifySpaceBetween flexAlignCenter mb5 ${sty.heading}`}
      >
        <h2 className="fontSize3 fontWight1">Menu</h2>
        <RxCross2 size={20} onClick={closeSideDrawer} />
      </div>

      <div className={sty.menuItem}>
        <LuLayoutDashboard size={16} />
        <p className="fontSize3 fontWeight1 pl3 pt3">Dashboard</p>
      </div>

      <div className={`  ${sty.menuItem} ${sty.active}`}>
        <PiNotePencilBold size={16} />
        <p className="fontSize3 fontWeight1 pl3">Assessment</p>
      </div>

      <div className={sty.menuItem}>
        <MdOutlineQuiz size={16} />
        <p className="fontSize3 fontWeight1 pl3 pt3 ">My Library</p>
      </div>

      <div className={sty.accDetailContainer}>
        <div className={sty.accDetail}>
          <img src={admin_meds} />
          <p className="fontSize3 fontWeight1 pl3 pt3">Round Status</p>
        </div>
        <span className={sty.adminWrapper}>Admin</span>
      </div>
    </div>
  );
}

export default SideDrawer;
