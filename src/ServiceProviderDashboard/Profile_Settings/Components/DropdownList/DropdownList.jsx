import styles from "../DropdownList/DropdownList.module.css";
import { ICONS } from "../../../../Assets/Icons";
import { useState } from "react";

const DropdownList = ({ options, defaultValue, from }) => {
  const initialvalue = defaultValue || "Choose an option";
  const [showOptions, setShowOptions] = useState(false);
  const [optionSelected, setOptionSelected] = useState(initialvalue);
  const handleToggle = (value) => {
    setOptionSelected(value);
    setShowOptions(!showOptions)
  };

  return (
    <div className={styles.DropdownList_parent}>
      <div
        style={{ padding: from === "DND" ? "6px 10px" : "12px 20px" }}
        className={styles.dropdownList}
        onClick={() => setShowOptions(!showOptions)}
      >
        <div className={styles.dropdownList_text}>{optionSelected}</div>
        <div className={showOptions ? styles.DropdownList_Cursor : null}>
          {ICONS.DownArrowIcon}
        </div>
      </div>
      <div
        className={styles.DropdownList_Data}
        style={{ display: showOptions ? "block" : "none" }}
      >
        {options.map((item, index) => (
          <p
            className={styles.DropdownList_childData}
            key={index}
            onClick={() => handleToggle(item)}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};
export default DropdownList;
