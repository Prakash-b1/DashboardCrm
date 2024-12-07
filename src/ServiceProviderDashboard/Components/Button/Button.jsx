import Styles from "./Button.module.css";

const Button = ({
  text,
  backgroundColor,
  color,
  borderColor,
  padding,
  width,
  fontSize,
  onClick,
  children,
  disabled,
  minWidth
}) => {
  return (
    <button
    disabled={disabled}
      onClick={onClick}
      className={Styles.button}
      style={{
        backgroundColor: backgroundColor,
        color: color,
        border: borderColor
          ? `1px solid ${borderColor} `
          : `1px solid ${backgroundColor}`,
        padding: padding,
        width: width,
        fontSize: fontSize,
        minWidth: minWidth ? minWidth : '',
      }}
    >
      {text ? text :children }
    </button>
  );
};

export default Button;
