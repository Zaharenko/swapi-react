import React from "react";
import PropTypes from "prop-types";
import style from "./Row.module.css";


//React element props
const Row = ({ leftItem, rightItem }) => {
  return (
    <div className={style.row}>
      {leftItem}
      {rightItem}
    </div>
  );
};

Row.propTypes = {
  leftItem: PropTypes.element,
  rightItem: PropTypes.element,
};

export default Row;
