import * as React from "react";

interface ScrollProps {}

const Scroll: React.FunctionComponent<ScrollProps> = ({ children }) => {
  return (
    <div
      style={{ overflow: "scroll", border: "5px solid black", height: "800px" }}
    >
      {children}
    </div>
  );
};

export default Scroll;
