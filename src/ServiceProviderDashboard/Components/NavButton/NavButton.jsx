import Styles from "./NavButton.module.css";

const NavButton = ({ show, setShow, options }) => {
  return (
    <div className={Styles.navButton_container}>
      {options?.map((option, index) => (
        <div
          key={option}
          style={{ backgroundColor: show === option ? "#FED462" : "" }}
          onClick={() => setShow(option)}
          className={
            index === 0
              ? ` ${Styles.navButton} ${Styles.navButton1}`
              : index === options.length - 1
              ? ` ${Styles.navButton} ${Styles.navButton3}`
              : ` ${Styles.navButton} ${Styles.navButton2}`
          }
        >
          {option}
        </div>
      ))}
    </div>
  );
};

export default NavButton;
