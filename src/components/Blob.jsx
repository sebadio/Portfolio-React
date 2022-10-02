import React from "react";

const Blob = ({ child }) => {
  return <div className={`blob blob${child}`}></div>;
};

export default React.memo(Blob);
