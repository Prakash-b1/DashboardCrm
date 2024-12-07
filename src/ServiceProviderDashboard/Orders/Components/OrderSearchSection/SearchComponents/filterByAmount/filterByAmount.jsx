// import "rsuite/dist/rsuite.min.css";

import Styles from "./filterByAmount.module.css";
import "../../../../../../utils/utilsCss/utilsCss.css";

import { useState } from "react";
// import { RangeSlider } from "rsuite";

import { ICONS } from "../../../../../../Assets/Icons";
import Button from "../../../../../Components/Button/Button";

const FilterByAmount = ({ onClose }) => {
  const [value, setValue] = useState([1000, 9000]);
  const [error,setError] = useState('')

  const handleFromChange = (e) => {
    const input = e.target.value;
    let min = 0;
    let max = 10000;
    const [start, end] = value;
    if (input >= min && input <= max) {
      if (input <= end) {
        setValue([Number(input), end]);
        setError('')
      }else{
        setError('value trying to enter is greater than to value')
      }
    } else {
      setValue([min, end]);
    }
  };

  const handleToChange = (e) => {
    const input = e.target.value;
    let min = 0;
    let max = 10000;
    const [start, end] = value;
    if (input >= min && input <= max) {
      if (input >= start) {
        setValue([start, Number(input)]);
        setError('')
      }else{
        setError('value trying to enter is lesser than from value')
      }
     
    } else {
      setValue([start, max]);
    }
  };


  const handleApplyFilter = () =>{
    console.log(value)
    onClose();
  }

  return (
    <div className={Styles.filterByAmount}>
      <div className={Styles.header}>
        <h1>Price Range</h1>
        <span onClick={() => onClose()}>{ICONS.closeIcon}</span>
      </div>
      <div className={Styles.input_section}>
        <label>
          From
          <span className={Styles.rupee1}>&#8377;</span>
          <input
            type="number"
            value={value[0]}
            id="from"
            onChange={(e) => handleFromChange(e)}
            className={Styles.input}
            min="0"
            max="9999"
          />
        </label>

        <label>
          To
          <span className={Styles.rupee2}>&#8377;</span>
          <input
            type="number"
            value={value[1]}
            id="to"
            onChange={(e) => handleToChange(e)}
            className={Styles.input}
            min="1"
            max="10000"
          />
        </label>
      </div>
      {error && <p>{error}</p>}
      {/* <RangeSlider
        className={Styles.slider}
        progress
        // style={{ marginTop: 16 }}
        value={value}
        onChange={(value) => {
          setValue(value);
        }}
        min={0}
        max={10000}
      /> */}

      <hr className={Styles.line}></hr>

      <div className={Styles.footer}>
        <Button
          onClick={() => setValue([1000,9000])}
          backgroundColor="#FFF"
          borderColor="#ccc"
          color="black"
          text="Clear"
          width="100%"
          fontSize="1rem"
        />
        <Button
          onClick={() =>handleApplyFilter()}
          backgroundColor="#FED462"
          color="black"
          text="Apply Filter"
          width="100%"
          fontSize="1rem"
        />
      </div>
    </div>
  );
};

export default FilterByAmount;
