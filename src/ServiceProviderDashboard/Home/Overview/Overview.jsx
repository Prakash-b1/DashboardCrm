import { ICONS } from "../../../Assets/Icons/index";
import Styles from "./Overview.module.css";
import "../../../utils/utilsCss/utilsCss.css";
import OrdersBrekoutChart from "./Charts/OrdersBreakout";
import RevenueBreakoutChart from "./Charts/RevenueBreakout";
import AverageOrderMixChart from "./Charts/AverageOrderValueMixChart";
import SalesProgressBar from "./Charts/SalesProgressBar";
import MyMixedChart from "./Charts/MixChart";

const Overview = () => {
  return (
    <div className={` ${Styles.overview_page}`}>
      <div className={Styles.overview_top_section}>
        <p className={`center-vertical ${Styles.title}  ${Styles.outer_title}`}>
          Orders Breakout <span>{ICONS.infoIcon}</span>
        </p>
        <section
          className={`${Styles.overview_section} ${Styles.overview_top_section1} `}
        >
          <p className={`center-vertical ${Styles.title}`}>
            Orders Breakout <span>{ICONS.infoIcon}</span>
          </p>
          <OrdersBrekoutChart />
        </section>
        <p className={`center-vertical ${Styles.title}  ${Styles.outer_title}`}>
          Revenue Breakout <span>{ICONS.infoIcon}</span>
        </p>
        <section
          className={`${Styles.overview_section} ${Styles.overview_top_section2}`}
        >
          <p className={`center-vertical ${Styles.title}`}>
            Revenue Breakout <span>{ICONS.infoIcon}</span>
          </p>

          <RevenueBreakoutChart />
        </section>
      </div>

      <section
        className={`${Styles.overview_section2}`}
      >
        <p className={`center-vertical ${Styles.title}`}>
          Average Order Value<span>{ICONS.infoIcon}</span>
        </p>
        <div className={Styles.overview_bottom_section}>

          <section className={Styles.mixed_chart_container}>
            <MyMixedChart />
          </section>
          <section
            className={Styles.progressbar_container}
          >
            <SalesProgressBar percentage={35} />
          </section>


        </div>
      </section>
    </div>
  );
};

export default Overview;
