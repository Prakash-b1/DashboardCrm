// import "rsuite/dist/rsuite.min.css";
//import "./rsuite.module.css"; // it has to be decleared after "import rsuite/dist/rsuite.min.css" to be applied as required to cusomize
import styles from "./OrderSearchSection.module.css";

import { useEffect, useRef, useState } from "react";
import { addDays } from "date-fns";
// import { DateRangePicker } from "rsuite";


import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

import { Calendar } from 'primereact/calendar';


import { ICONS } from "../../../../Assets/Icons";
import FilterByAmount from "./SearchComponents/filterByAmount/filterByAmount";
import FilterByOrder from "./SearchComponents/filterByOrder/filterByOrder";
import SearchBar from "../../../Components/SearchBar/SearchBar";

const OrderSearchSection = () => {

  const calendarRef = useRef(null);
  const [appendToElement, setAppendToElement] = useState(null);

  useEffect(() => {
    setAppendToElement(calendarRef.current);
  }, []);

  const [open, setOpen] = useState("");
  const [reset, setReset] = useState(false);
  const [searchData, setSearchData] = useState();

  const [dates, setDates] = useState([addDays(new Date(), -7), new Date()]);
  console.log(dates, 'dates')

  const handleFilterByCategoryClick = () => {
    open !== "filterByCategory" ? setOpen("filterByCategory") : setOpen(null);
  };

  const handleFilterByAmountClick = () => {
    open !== "filterByAmount" ? setOpen("filterByAmount") : setOpen(null);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleReset = () => {
    setReset(!reset)
    // api to be called
  }

  const handleSearch = (e) => {
    let value = e.target.value
    setSearchData(value)

    //api to be called
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.left_container}>
          <div className={styles.left_container_data_one}>
            {ICONS.filterListIcon}
            <span>Filter by</span>
          </div>
          <div className={` ${styles.left_container_data_first} `}>
            {/* <DateRangePicker
              className={`${styles.left_container_data_search1}`}
              showOneCalendar
              size="md"
              caretAs={null}
              ranges={[]}
              format="dd MMM yy"
              appearance="subtle"
              cleanable={true}
              defaultValue={[addDays(new Date(), -7), new Date()]}
            /> */}
            <div ref={calendarRef}>
              <Calendar
                placeholder="Date Range"
                className={styles.calendar}
                inputClassName={styles.calendarInput}
                panelClassName={styles.pickerStyle}
                panelStyle={{ position: 'absolute', top: '220px' }}
                value={dates}
                onChange={(e) => setDates(e.value)}
                appendTo={appendToElement}
                selectionMode="range"
                readOnlyInput hideOnRangeSelection
              />
            </div>
            <span style={{ display: "none" }}> {ICONS.expandMore}</span>
          </div>
          <div
            className={`${styles.left_container_data} ${styles.left_container_data_middle}`}
            onClick={handleFilterByCategoryClick}
          >
            <span>Order Category</span>
            <span className={open === "filterByCategory" ? styles.icon_rotate : styles.icon}>{ICONS.expandMore}</span>
            {open === "filterByCategory" && (
              <div
                style={{
                  position: "absolute",
                  left: "0px",
                  top: "50px",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <FilterByOrder onClose={handleClose} />
              </div>
            )}
          </div>
          <div
            className={`${styles.left_container_data} ${styles.left_container_data_middle}`}
            onClick={handleFilterByAmountClick}
          >
            <span>Amount</span>
            <span className={open === "filterByAmount" ? styles.icon_rotate : styles.icon}>{ICONS.expandMore}</span>

            {open === "filterByAmount" && (
              <div
                style={{
                  position: "absolute",
                  left: "0px",
                  top: "50px",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <FilterByAmount onClose={handleClose} />
              </div>
            )}
          </div>
          <div
            onClick={() => handleReset()}
            className={`${styles.left_container_data} ${styles.left_container_data_last}`}
          >
            <span className={reset ? styles.resetIcon : null}>{ICONS.deviceResetIcon}</span>
            <span>Reset Filters</span>
          </div>
        </div>
        <SearchBar height='46px' value={searchData} onChange={(e) => handleSearch(e)} placeholder="Search order no...." />
      </div>
    </>
  );
};

export default OrderSearchSection;
