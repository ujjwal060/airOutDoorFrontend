import React from "react";

function PrevArrow(props) {
    const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
      onClick={onClick}
    ></div>
  );
}

export default PrevArrow;
