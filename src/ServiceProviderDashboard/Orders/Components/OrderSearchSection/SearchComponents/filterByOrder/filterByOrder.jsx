import Styles from "./filterByOrder.module.css";
import "../../../../../../utils/utilsCss/utilsCss.css";

import { useState } from "react";

import { ICONS } from "../../../../../../Assets/Icons";

import Button from "../../../../../Components/Button/Button";


const FilterByOrder = ({ onClose }) => {
  const category = [
    "Plumbing",
    "Electrical",
    "Interior Design",
    "Architect",
    "Labour",
    "Project Managing",
    "Contract",
  ];

  const [selectedCategory, setSelectedCategory] = useState([]);
  // console.log(selectedCategory)

  const handleClick = (cat) => {
    if (!selectedCategory.includes(cat)) {
      setSelectedCategory([...selectedCategory, cat]);
    } else {
      const data = [...selectedCategory].filter((catt) => catt !== cat);
      setSelectedCategory(data);
    }
  };

  const handleClear = () => {
    setSelectedCategory([]);
  };

  const handleApplyFilter = () => {
//fetch call
    onClose()
  }

  return (
    <div className={Styles.filterByorder}>
      <div className={Styles.header}>
        <h1>Order Category</h1>
        <span onClick={() => onClose()}>{ICONS.closeIcon}</span>
      </div>
      <div className={Styles.order_list}>
        {category.map((cat) => (
          <div
            key={cat}
            onClick={() => handleClick(cat)}
            className={
              selectedCategory.includes(cat)
                ? `${Styles.order_type_name} ${Styles.order_type_name_selected}`
                : Styles.order_type_name
            }
          >
            {cat}
          </div>
        ))}
      </div>
      <hr className={Styles.line}></hr>
      <p className={Styles.text}>*You can choose multiple order types</p>
      <div className={Styles.footer}>
        <Button
          onClick={() => handleClear()}
          backgroundColor="#FFF"
          borderColor="#ccc"
          color="black"
          text="Clear"
          width="100%"
        />
        <Button
          onClick={() => handleApplyFilter()}
          backgroundColor="#FED462"
          color="black"
          text="Apply Filter"
          width="100%"
        />
      </div>
    </div>
  );
};

export default FilterByOrder;
