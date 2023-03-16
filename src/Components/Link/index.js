import React from "react";
import { useNavigate } from "react-router-dom";

function Link({ class: className = "", href, text }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${href}`, { screen: "HomeScreen" });
  };

  const linkClassName = className ? className : `link-${href}`;

  return (
    <button className={linkClassName} onClick={handleClick}>
      {text}
    </button>
  );
}

export default Link;
