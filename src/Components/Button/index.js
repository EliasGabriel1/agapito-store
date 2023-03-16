import React from "react";

function Button({ onclick, class: className = "", text }) {
  const handleClick = onclick ? onclick : () => {};

  return (
    <button onClick={handleClick} className={className}>
      {text}
    </button>
  );
}

export default Button;
