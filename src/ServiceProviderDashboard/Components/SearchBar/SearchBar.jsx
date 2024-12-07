import Styles from "./SearchBar.module.css";

import {ICONS} from '../../../Assets/Icons'

const SearchBar = ({ onChange, placeholder, minWidth ,height}) => {
  return (
    <div className={Styles.input_parent}>
      {ICONS.searchIcon}
      <input
      onChange={onChange}
        className={Styles.input}
        style={{ minWidth: minWidth,height: height }}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;
