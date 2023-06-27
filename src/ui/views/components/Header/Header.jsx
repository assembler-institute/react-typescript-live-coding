import React from "react";

export const Header = ({ renderedCount }) => (
  <>
    <span className="counter span__counter--right span__counter--styles">Render Count: {renderedCount}</span>
  </>
);
