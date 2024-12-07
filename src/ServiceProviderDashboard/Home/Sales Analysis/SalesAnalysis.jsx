import { ICONS } from "../../../Assets/Icons";
import Styles from "./SalesAnalysis.module.css";
import SalesAnalysisChart from "./SalesAnalysisChart";

const SalesAnalysis = () => {
  const Analysis = [
    {
      analysis_name: "Contractor",
      analysis_image:
        "/Assets/ServiceProviderDashboard/SalesAnalysis/GreenVector.svg",
      analysis_price: 10000,
      analysis_arrow: "↑",
    },
    {
      analysis_name: "Labours",
      analysis_image:
        "/Assets/ServiceProviderDashboard/SalesAnalysis/RedVector.svg",
      analysis_price: 10000,
      analysis_arrow: "↓",
    },
    {
      analysis_name: "Project Managers",
      analysis_image:
        "/Assets/ServiceProviderDashboard/SalesAnalysis/RedVector.svg",
      analysis_price: 10000,
      analysis_arrow: "↓",
    },
    {
      analysis_name: "Architect",
      analysis_image:
        "/Assets/ServiceProviderDashboard/SalesAnalysis/RedVector.svg",
      analysis_price: 10000,
      analysis_arrow: "↓",
    },
    {
      analysis_name: "Interior Design",
      analysis_image:
        "/Assets/ServiceProviderDashboard/SalesAnalysis/GreenVector.svg",
      analysis_price: 10000,
      analysis_arrow: "↑",
    },
    {
      analysis_name: "Engineers",
      analysis_image:
        "/Assets/ServiceProviderDashboard/SalesAnalysis/GreenVector.svg",
      analysis_price: 10000,
      analysis_arrow: "↑",
    },
  ];
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.left_container}>
          <div className={Styles.left_header}>
            <h2>Sales by Category {ICONS.infoIcon}</h2>
          </div>
          <div className={Styles.left_box}>
            <SalesAnalysisChart data={Analysis} />
          </div>
        </div>
        <div className={Styles.right_container}>
          <div className={Styles.right_header}>
            <h2>Top Selling Services</h2>
          </div>
          {Analysis.map((item) => (
            <div key={item.analysis_name} className={Styles.right_box}>
              <p className={Styles.right_box_name}>{item.analysis_name}</p>
              <div className={Styles.right_box_data}>
                {item.analysis_arrow === "↓"
                  ? ICONS.redVector
                  : ICONS.greenVector}
                <p>
                  ₹ {item.analysis_price}
                  <span
                    className={
                      item.analysis_arrow === "↑"
                        ? Styles.positive
                        : Styles.negative
                    }
                  >
                    {item.analysis_arrow}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SalesAnalysis;
