import { useState } from "react";
import Styles from "./SortByYear.module.css";
import "../../../../utils/utilsCss/utilsCss.css";
import { ICONS } from "../../../../Assets/Icons";

const SortByYear = () => {
  const [selectedYear, setSelectedYear] = useState(2024);
  const [dropdownOption, setDropdownOption] = useState("This year");
  const [open, setOpen] = useState(false);

  const years = [2024,2025];

  const dropdownFunc = (e) => {
    const value = e.target.value;
    setDropdownOption(value);
    setOpen(false);
  };

  return (
    <div className={`${Styles.sortByYearContainer} space_between`}>
      <div className={Styles.sortByYearMenuParent}>
        <span className={Styles.calendarIcon}>{ICONS.calendarIcon}</span>
        <span className={Styles.cursorIcon}>{ICONS.cursorDown}</span>
        <div onClick={() => setOpen(!open)} className={Styles.sortByYearMenu}>
          {dropdownOption}
        </div>

        <div
          style={{ display: open ? "block" : "none" }}
          className={Styles.dropdownMenu}
        >
          <option
            onClick={(e) => dropdownFunc(e)}
            value="This year"
            className={Styles.option}
          >
            This year
          </option>

          <option
            onClick={(e) => dropdownFunc(e)}
            value="This month"
            className={Styles.option}
          >
            This month
          </option>
          <option
            onClick={(e) => dropdownFunc(e)}
            value="This week"
            className={Styles.option}
          >
            This week
          </option>
        </div>
      </div>

      <div className={Styles.yearList}>
        {years.map((year) => (
          <span
            key={year}
            className={
              selectedYear === year
                ? `${Styles.selected} ${Styles.year}`
                : Styles.year
            }
            onClick={() => setSelectedYear(year)}
          >
            {year}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SortByYear;
