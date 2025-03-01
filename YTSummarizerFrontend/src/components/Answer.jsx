import React from "react";

const Answer = ({ children, isHTMLCode = false }) => {
  if (isHTMLCode) {
    return <div className="Answer">{children}</div>;
  }

  return (
    <div
      className="Answer"
      dangerouslySetInnerHTML={{ __html: children }}
    ></div>
  );
};

export default Answer;
